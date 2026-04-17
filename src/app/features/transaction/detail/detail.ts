import { Component, OnInit, inject, signal, computed, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../../../services/detail';
import { TransactionResponse } from '../../../core/model/transaction.model';
import { DetailHeader } from "../detail-header/detail-header";
import { DetailMain } from "../detail-main/detail-main";
import { RetryUpload } from '../../../services/retry-upload';
import { MatIcon } from "@angular/material/icon";
import { UpdateInvoice } from '../../../services/update-invoice';
import { effect } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, DetailHeader, DetailMain, MatIcon],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail implements OnInit {
  @ViewChild(DetailMain) detailMainRef!: DetailMain;
  private route = inject(ActivatedRoute);
  private detailService = inject(DetailService);
  private updateInvoiceService = inject(UpdateInvoice);
  private retryUploadService = inject(RetryUpload)
 
  isEditing = signal(false);
  // Lưu toàn bộ dữ liệu transaction
  transactionData = signal<TransactionResponse | null>(null);
  
  // Danh sách invoices lấy từ transactionData
  invoices = computed(() => this.transactionData()?.invoices || []);
  
  currentIndex = signal(0);
  
  // Invoice đang hiển thị
  currentInvoice = computed(() => {
    const list = this.invoices();
    return list.length > 0 ? list[this.currentIndex()] : null;
  });
  constructor() {
  effect(() => {
    const invoice = this.currentInvoice();
    if (!invoice) return;

    // delay để chắc chắn child render xong
    setTimeout(() => {
      this.detailMainRef?.syncInvoice(invoice);
    });
    this.isEditing.set(false);
  });
}

  ngOnInit() {
    const tid = this.route.snapshot.paramMap.get('transaction_id') || this.route.snapshot.paramMap.get('id');
    
    if (tid) {
      this.detailService.getInvoiceDetail(tid).subscribe({
        next: (data) => {
          this.transactionData.set(data); // Lưu toàn bộ data gồm ID, Name và Invoices


          console.log(
            "data:",data
          )
        },
        error: (err) => console.error('❌ Lỗi:', err)
      });
    }
  }

  nextInvoice() {
  if (this.currentIndex() < this.invoices().length - 1) {
    this.isEditing.set(false);
    this.currentIndex.update(i => i + 1);
  }
}

prevInvoice() {
  if (this.currentIndex() > 0) {
    this.isEditing.set(false);
    this.currentIndex.update(i => i - 1);
  }
}

  retry(invoice: any) {
  invoice.loading = true;

  this.retryUploadService.retryInvoice(invoice.invoice_id).subscribe({
    next: (res: any) => {
      const updated = res.invoice;

      this.transactionData.update((data) => {
        if (!data) return data;

        return {
          ...data,
          invoices: data.invoices.map(inv =>
            inv.invoice_id === updated.invoice_id
              ? { ...inv, ...updated, loading: false }
              : inv
          )
        };
      });
    },
    error: () => {
      invoice.loading = false;
    }
  });
}

startEdit() {
  this.isEditing.set(true);
}

cancelEdit() {
  this.isEditing.set(false);
}
updateInvoice() {
  const current = this.currentInvoice();
  if (!current) return;

  const formData = this.detailMainRef?.form?.();
if (!formData) return;

const normalizedItems = formData.items.map(i => {
  const qty = Number(i.quantity || 0);
  const price = Number(i.unit_price || 0);

  return {
    ...i,
    quantity: qty,
    unit_price: price,
    amount: qty * price
  };
});
  const payload = {
  invoice_id: current.invoice_id,
  vendor_name: formData.vendor_name,
  invoice_number: formData.invoice_number,
  category: formData.category,
  total: Number(
  normalizedItems.reduce((s, i) => s + i.amount, 0).toFixed(2)
),
  items: normalizedItems
};

  this.updateInvoiceService.updateInvoice(payload).subscribe({
    next: (res: any) => {
      const updated = res.invoice;

      this.isEditing.set(false);

      // ✅ update source of truth (parent)
      this.transactionData.update(data => {
        if (!data) return data;

        return {
          ...data,
          invoices: data.invoices.map(inv =>
            inv.invoice_id === updated.invoice_id
              ? { ...inv, ...updated }
              : inv
          )
        };
      });

      // ✅ sync lại child form đúng cách
      this.detailMainRef.syncInvoice(updated);

      this.isEditing.set(false);
    },
    error: (err) => {
      console.error('Update failed:', err);
    }
  });
}
}