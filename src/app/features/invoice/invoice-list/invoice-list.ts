import { Component, OnInit } from '@angular/core';
import { InvoiceFilters } from "../invoice-filters/invoice-filters";
import { InvoiceTable } from "../invoice-table/invoice-table";
import { InvoiceArchive } from "../invoice-archive/invoice-archive";
import { InvoicesServices } from '../../../services/invoices';
import { Observable } from 'rxjs';
import { Invoice } from '../../../core/model/transaction.model';
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [InvoiceFilters, InvoiceTable, InvoiceArchive, AsyncPipe ],
  templateUrl: './invoice-list.html',
  styleUrls: ['./invoice-list.scss'], // ✅ fix luôn lỗi cũ
})
export class InvoiceList implements OnInit {

  invoices$!: Observable<Invoice[]>;
  loading$!: Observable<boolean>;
  totalItems$!: Observable<number>
  constructor(private invoiceService: InvoicesServices) {}
  
  currentPage = 1;
  pageSize = 8;

  ngOnInit(): void {
    this.invoices$ = this.invoiceService.invoices$;
    this.loading$ = this.invoiceService.loading$;
    this.totalItems$ = this.invoiceService.totalItems$;
    this.invoiceService.loadListInvoices();
  }

  loadMore(){
    this.invoiceService.loadMore();
  }
  onPageChange(page: number) {
    this.currentPage = page;
    
    
    this.invoiceService.loadMore();

   
    const scrollArea = document.querySelector('.scroll-area');
    if (scrollArea) {
      scrollArea.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}