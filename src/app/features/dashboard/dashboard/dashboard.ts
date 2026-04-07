import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SpendingChart } from "../spending-chart/spending-chart";
import { QuickActions } from "../quick-actions/quick-actions";
import { RecentInvoices } from "../recent-invoices/recent-invoices";
import { Infomation } from '../../../services/infomation';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIcon, SpendingChart, QuickActions, RecentInvoices],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit{

  invoiceCount: number = 0;
  transactionCount: number = 0;
  totalAmount: number = 0;
  totalToday: number = 0;

  constructor(private infomationService: Infomation,

    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.infomationService.getInvoiceCount().subscribe((res: any) => {
       console.log(res)
     this.invoiceCount = res.invoice_count;
     this.cdr.detectChanges();
    });

    this.infomationService.getTransactionCount().subscribe((res: any) => {
       console.log(res)
      this.transactionCount = res.transaction_count;
      this.cdr.detectChanges();
    });

    this.infomationService.getTotalAmount().subscribe((res: any) => {
       console.log(res)
      this.totalAmount = res.total_invoice_amount;
      this.cdr.detectChanges();
    });

    this.infomationService.getTotalToday().subscribe((res: any) => {
       console.log(res)
      this.totalToday = res.total_invoice_amount;
      this.cdr.detectChanges();
    });
  }
}
