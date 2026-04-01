import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../../core/model/transaction.model';

@Component({
  selector: 'app-transaction-form',
  imports: [CommonModule],
  templateUrl: './transaction-form.html',
  styleUrl: './transaction-form.scss',
})
export class TransactionForm {
// Nhận toàn bộ object transaction từ cha
  @Input() data!: Transaction;

  // Mock thêm danh sách danh mục để người dùng chọn (như ảnh 1)
  categories = [
    'IT Services & Infrastructure',
    'Office Supplies',
    'Travel Expenses',
    'Marketing & Advertising'
  ];

  // Logic tính toán số lượng sub-vendors dựa trên data (nếu có)
  get subVendorInfo(): string {
    const docCount = this.data?.pages?.length || 0;
    return `Includes items from 2 sub-vendors across ${docCount} documents.`;
  }

}
