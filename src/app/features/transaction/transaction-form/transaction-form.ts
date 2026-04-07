import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../../core/model/transaction.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-transaction-form',
  imports: [CommonModule,MatFormFieldModule,MatSelectModule,
    MatInputModule,MatIconModule
  ],
  templateUrl: './transaction-form.html',
  styleUrl: './transaction-form.scss',
})
export class TransactionForm {
// Nhận toàn bộ object transaction từ cha
  @Input() data!: Transaction;

  // Mock thêm danh sách danh mục để người dùng chọn (như ảnh 1)
 

  // Logic tính toán số lượng sub-vendors dựa trên data (nếu có)
  get subVendorInfo(): string {
    const docCount = this.data?.pages?.length || 0;
    return `Includes items from 2 sub-vendors across ${docCount} documents.`;
  }

}
