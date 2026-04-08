import { Component, signal } from '@angular/core';
import { Invoice } from '../../../core/model/transaction.model';
import { Infomation } from '../../../services/infomation';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-recent-invoices',
  imports: [NgClass],
  templateUrl: './recent-invoices.html',
  styleUrl: './recent-invoices.scss',
})
export class RecentInvoices {
  recentInvoices = signal<any[]>([]);
  constructor(private service: Infomation) {}
  ngOnInit(): void {
    // Gọi API lấy summary (giữ nguyên code cũ của bạn)
    
    // Gọi thêm API lấy 5 invoice mới nhất
    this.service.getNewInvoiceLimit().subscribe({
      next: (res: any) => {
       this.recentInvoices.set(res.invoices);
        console.log('recent', this.recentInvoices())
      },
      error: (err) => console.error('Lỗi lấy danh sách invoice:', err)
    });
  }
  formatDate(dateStr: string | Date): string {
    return new Date(dateStr).toLocaleDateString('vi-VN');
  }

  // Hàm format tiền tệ
  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }

}
