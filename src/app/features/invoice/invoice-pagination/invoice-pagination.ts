import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-invoice-pagination',
  standalone: true,
  templateUrl: './invoice-pagination.html',
  styleUrls: ['./invoice-pagination.scss'],
})
export class InvoicePagination {

  @Input() totalItems = 0;
  @Input() pageSize = 5;
  @Input() currentPage = 1;

  @Output() pageChange = new EventEmitter<number>();

  get totalPages() {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goTo(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }

  next() {
    this.goTo(this.currentPage + 1);
  }

  prev() {
    this.goTo(this.currentPage - 1);
  }

  get startItem() {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endItem() {
    return Math.min(this.currentPage * this.pageSize, this.totalItems);
  }
}