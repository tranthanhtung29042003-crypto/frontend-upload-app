import { Component, Input } from '@angular/core';
import { InvoiceImg } from '../../../core/model/transaction.model';

@Component({
  selector: 'app-invoice-viewer',
  standalone: true,
  imports: [],
  templateUrl: './invoice-viewer.html',
  styleUrl: './invoice-viewer.scss',
})
export class InvoiceViewer {

  @Input() pages: InvoiceImg[] = [];

  activeIndex: number = 0;

  // 👉 Tránh crash khi pages rỗng
  get currentPage(): InvoiceImg | null {
    return this.pages?.[this.activeIndex] ?? null;
  }

  changePage(index: number) {
    if (index >= 0 && index < this.pages.length) {
      this.activeIndex = index;
    }
  }

  // ✅ FIX LỖI: thêm function này
  retryPage() {
    const page = this.currentPage;
    if (!page) return;

    console.log('Retry page:', this.activeIndex);

    // 👉 set trạng thái loading
    page.status = 'processing';

    // 👉 mock call API
    setTimeout(() => {
      // giả lập success
      page.status = 'success';
      page.errorMessage = '';
    }, 1200);
  }
}