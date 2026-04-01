import { Component } from '@angular/core';
import { InvoiceFilters } from "../invoice-filters/invoice-filters";
import { InvoiceTable } from "../invoice-table/invoice-table";
import { InvoiceArchive } from "../invoice-archive/invoice-archive";

@Component({
  selector: 'app-invoice-list',
  imports: [InvoiceFilters, InvoiceTable, InvoiceArchive],
  templateUrl: './invoice-list.html',
  styleUrl: './invoice-list.scss',
})
export class InvoiceList {}
