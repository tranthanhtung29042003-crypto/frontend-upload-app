import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { InvoicePagination } from "../invoice-pagination/invoice-pagination";
@Component({
  selector: 'app-invoice-table',
  imports: [NgClass, MatIcon, InvoicePagination],
  templateUrl: './invoice-table.html',
  styleUrl: './invoice-table.scss',
})
export class InvoiceTable { isActive = true;
  canSave = false;
  isSpecial = true;
  currentPage = 1;
  pageSize = 5;

  get paginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.invoices.slice(start, start + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
invoices = [
  {
    name: 'Amazon Web Services',
    code: 'INV-2023-001',
    date: 'Oct 12, 2023',
    category: 'Cloud',
    amount: '$1,240.00',
    status: 'Processed'
  },
   {
    name: 'Amazon Web Services',
    code: 'INV-2023-001',
    date: 'Oct 12, 2023',
    category: 'Cloud',
    amount: '$1,240.00',
    status: 'Processed'
  },
   {
    name: 'Amazon Web Services',
    code: 'INV-2023-001',
    date: 'Oct 12, 2023',
    category: 'Cloud',
    amount: '$1,240.00',
    status: 'Processed'
  },
   {
    name: 'Amazon Web Services',
    code: 'INV-2023-001',
    date: 'Oct 12, 2023',
    category: 'Cloud',
    amount: '$1,240.00',
    status: 'Processed'
  },
   {
    name: 'Amazon Web Services',
    code: 'INV-2023-001',
    date: 'Oct 12, 2023',
    category: 'Cloud',
    amount: '$1,240.00',
    status: 'Processed'
  },
   {
    name: 'Amazon Web Services',
    code: 'INV-2023-001',
    date: 'Oct 12, 2023',
    category: 'Cloud',
    amount: '$1,240.00',
    status: 'Processed'
  },
   {
    name: 'Amazon Web Services',
    code: 'INV-2023-001',
    date: 'Oct 12, 2023',
    category: 'Cloud',
    amount: '$1,240.00',
    status: 'Processed'
  },
   {
    name: 'Amazon Web Services',
    code: 'INV-2023-001',
    date: 'Oct 12, 2023',
    category: 'Cloud',
    amount: '$1,240.00',
    status: 'Processed'
  },
   {
    name: 'Amazon Web Services',
    code: 'INV-2023-001',
    date: 'Oct 12, 2023',
    category: 'Cloud',
    amount: '$1,240.00',
    status: 'Processed'
  },
   {
    name: 'Amazon Web Services',
    code: 'INV-2023-001',
    date: 'Oct 12, 2023',
    category: 'Cloud',
    amount: '$1,240.00',
    status: 'Processed'
  },
  {
    name: 'Figma Inc.',
    code: 'INV-2023-082',
    date: 'Oct 10, 2023',
    category: 'Design',
    amount: '$45.00',
    status: 'Processed'
  },
  {
    name: 'Stripe Terminal',
    code: 'INV-2023-119',
    date: 'Oct 08, 2023',
    category: 'Hardware',
    amount: '$299.00',
    status: 'Failed'
  },
  {
    name: 'Stripe Terminal',
    code: 'INV-2023-119',
    date: 'Oct 08, 2023',
    category: 'Hardware',
    amount: '$299.00',
    status: 'Failed'
  },{
    name: 'Stripe Terminal',
    code: 'INV-2023-119',
    date: 'Oct 08, 2023',
    category: 'Hardware',
    amount: '$299.00',
    status: 'Failed'
  }
  ,{
    name: 'Stripe Terminal',
    code: 'INV-2023-119',
    date: 'Oct 08, 2023',
    category: 'Hardware',
    amount: '$299.00',
    status: 'Failed'
  },
  {
    name: 'Stripe Terminal',
    code: 'INV-2023-119',
    date: 'Oct 08, 2023',
    category: 'Hardware',
    amount: '$299.00',
    status: 'Failed'
  },

];

}
