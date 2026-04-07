
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-header',
  imports: [CommonModule],
  templateUrl: './transaction-header.html',
  styleUrl: './transaction-header.scss',
})
export class TransactionHeader {
  // Nhận ID từ cha
  @Input() transaction_id: number | string = '';

  // Nhận số lượng hóa đơn (giả sử bạn muốn truyền thêm count)
  @Input() invoiceCount: number = 0;


}
