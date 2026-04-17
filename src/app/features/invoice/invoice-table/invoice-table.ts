import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Invoice } from '../../../core/model/transaction.model';
import { MatIcon } from '@angular/material/icon';
import { InvoicePagination } from "../invoice-pagination/invoice-pagination";

@Component({
  selector: 'app-invoice-table',
  standalone: true,
  imports: [NgClass, MatIcon, InvoicePagination],
  templateUrl: './invoice-table.html',
  styleUrls: ['./invoice-table.scss'],
})
export class InvoiceTable {

  @Input() invoices: Invoice[] = [];
  @Input() loading: boolean = false;
  @Input() totalItems: number = 0;
  @Input() currentPage: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }
}