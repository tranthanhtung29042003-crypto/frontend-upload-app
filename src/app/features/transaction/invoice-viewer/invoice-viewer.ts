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

fixDriveLink(url: string): string {
  if (!url) return '';

  // Regex này cực kỳ mạnh, nó sẽ lấy chuỗi ID (25-33 ký tự) từ bất kỳ link Drive nào
  const match = url.match(/[-\w]{25,}/);
  
  if (match) {
    const fileId = match[0];
    // Sử dụng endpoint chuẩn của Google để nhúng ảnh
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }

  return url;
}
  retryPage() {
    const page = this.currentPage;
    if (!page) return;

    console.log('Retry page:', this.activeIndex);

   

    setTimeout(() => {
      // giả lập success
      page.status = 'success';
      page.errorMessage = '';
    }, 1200);
  }
}