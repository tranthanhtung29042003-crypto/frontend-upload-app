import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-header',
  imports: [],
  standalone: true,
  templateUrl: './detail-header.html',
  styleUrl: './detail-header.scss',
})
export class DetailHeader {
 @Input() transaction_id!: string;
  @Input() status = ""

  ngOnInit() {
  this.transaction_id = this.transaction_id.replace(',', '');
}
}
