import { Component } from '@angular/core';
import { InvoicesServices } from '../../../services/invoices';

@Component({
  selector: 'app-invoice-archive',
  standalone: true,
  templateUrl: './invoice-archive.html',
  styleUrls: ['./invoice-archive.scss'],
})
export class InvoiceArchive {
  currentTab: string = 'ALL';
  constructor(private invoiceService: InvoicesServices) {}

  setTab(status: string){
    this.currentTab = status;
    this.invoiceService.setArchive(status);
  }
}