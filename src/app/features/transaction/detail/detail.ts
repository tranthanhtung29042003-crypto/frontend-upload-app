import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../../../services/detail';
import { TransactionResponse } from '../../../core/model/transaction.model';
import { DetailHeader } from "../detail-header/detail-header";
import { DetailMain } from "../detail-main/detail-main";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, DetailHeader, DetailMain],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail implements OnInit {
  private route = inject(ActivatedRoute);
  private detailService = inject(DetailService);

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
      this.currentIndex.update(i => i + 1);
    }
  }

  prevInvoice() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(i => i - 1);
    }
  }
}