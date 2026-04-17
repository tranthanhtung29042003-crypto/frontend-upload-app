import {
  Component,
  computed,
  Input,
  OnChanges,
  signal,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Invoice } from '../../../core/model/transaction.model';
import { MatIcon } from '@angular/material/icon';
import { RetryUpload } from '../../../services/retry-upload';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-main',
  standalone: true,
  imports: [CommonModule, MatIcon, FormsModule],
  templateUrl: './detail-main.html',
  styleUrl: './detail-main.scss',
})
export class DetailMain implements OnChanges {

  @Input() invoice!: Invoice;
  @Input() isEditing: boolean = false;

  // ✅ signal state
  form = signal<Invoice | null>(null);

  // ✅ computed total
  total = computed(() => {
    const form = this.form();
    if (!form?.items) return 0;

    return form.items.reduce((sum: number, item: any) => {
      return sum + (
        Number(item.quantity || 0) *
        Number(item.unit_price || 0)
      );
    }, 0);
  });

  constructor(
    private retryUploadInvoiceService: RetryUpload
  ) {}

  // ✅ safe init from Input
  ngOnChanges(changes: SimpleChanges) {
  if (!changes['invoice']) return;

  const invoice = this.invoice;
  if (!invoice) return;

  // 🚨 chỉ init khi form chưa có data
  if (!this.form()) {
    this.form.set({
      ...invoice,
      items: invoice.items ? [...invoice.items] : []
    });
  }
}
  syncInvoice(invoice: Invoice) {
  if (!invoice) return;

  this.form.set({
    ...invoice,
    items: invoice.items ? [...invoice.items] : []
  });
}
 onItemChange(index: number) {
  const form = this.form();
  if (!form?.items) return;

  const items = [...form.items];

  const qty = Number(items[index].quantity || 0);
  const price = Number(items[index].unit_price || 0);

  items[index] = {
    ...items[index],
    quantity: qty,
    unit_price: price,
    amount: qty * price
  };

  this.form.set({ ...form, items });
}
  // ✅ add item
  addItem() {
  const form = this.form();
  if (!form) return;

  this.form.set({
    ...form,
    items: [
      ...(form.items || []),
      {
        item_name: '',
        quantity: 1,
        unit_price: 0,
        amount: 0 // ok để init nhưng sẽ override sau
      }
    ]
  });
}
  updateField<K extends keyof Invoice>(key: K, value: Invoice[K]) {
  const form = this.form();
  if (!form) return;

  this.form.set({
    ...form,
    [key]: value
  });
}
  // ✅ remove item
 removeItem(index: number) {
  const form = this.form();
  if (!form) return;

  const items = form.items ? [...form.items] : [];

  if (index < 0 || index >= items.length) return;

  const newItems = items.filter((_, i) => i !== index);

  this.form.set({
    ...form,
    items: newItems
  });
}

  // ✅ fix lỗi throw error
  formatVND(value: number): string {
    if (!value) return '0';
    return new Intl.NumberFormat('vi-VN').format(value);
  }

  // ❌ giữ nguyên logic API nhưng nên update form nếu cần
  retryInvoice(item: any) {
    item.loading = true;

    this.retryUploadInvoiceService.retryInvoice(item.invoice_id).subscribe({
      next: (res: any) => {
        const updated = res.invoice;

        item.status = updated.status;
        item.vendor = updated.vendor_name;
        item.total = updated.total;
        item.items = updated.items;

        item.loading = false;
      },
      error: (err) => {
        console.error('Retry failed:', err);
        item.loading = false;
      }
    });
  }
}