import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-upload-view',
  imports: [MatIcon, CommonModule,RouterLink],
  standalone: true,
  templateUrl: './upload-view.html',
  styleUrl: './upload-view.scss',
})
export class UploadView {

  @Input() uploadResults: any[] = [];
  @Output() onErrorClick = new EventEmitter<string>();

  handleErrorClick(item: any) {
    if (item.status === 'ERROR') {
      this.onErrorClick.emit('Hình ảnh này không phải hóa đơn hợp lệ.');
    }
  }
}