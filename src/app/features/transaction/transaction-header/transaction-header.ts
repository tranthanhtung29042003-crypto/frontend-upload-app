
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
  @Input() id: string = '';
  
  // Nhận độ tin cậy AI
  @Input() confidence: number = 0;

  // Nhận số lượng hóa đơn (giả sử bạn muốn truyền thêm count)
  @Input() invoiceCount: number = 0;


}
