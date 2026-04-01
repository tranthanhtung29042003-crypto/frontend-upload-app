import { Component } from '@angular/core';
import { InvoiceViewer } from "../invoice-viewer/invoice-viewer";
import { TransactionHeader } from "../transaction-header/transaction-header";
import { TransactionForm } from "../transaction-form/transaction-form";
import { TransactionFooter } from "../transaction-footer/transaction-footer";
import { Transaction } from '../../../core/model/transaction.model';


@Component({
  selector: 'app-transaction-review',
  imports: [InvoiceViewer, TransactionHeader, TransactionForm, TransactionFooter],
  templateUrl: './transaction-review.html',
  styleUrl: './transaction-review.scss',
})
export class TransactionReview {

  mockTransaction: Transaction = {
  id: 'TXN-2023-98421',
  confidence: 98.8,
  vendor: 'CloudNexus Solutions Ltd.',
  postingDate: '2023-10-24',
  currency: 'USD - United States Dollar',
  totalAmount: 2842.50,
  pages: [
    { 
      id: 'INV-001', 
      imageUrl: 'assets/invoice1.jpg', 
      status: 'success' 
    },
    { 
      id: 'INV-002', 
      imageUrl: '/assets/invoice1.jpg', 
      status: 'error', 
      errorMessage: 'This document was not recognized as a valid invoice.' 
    },
    { 
      id: 'INV-003', 
      imageUrl: 'assets/invoice1.jpg', 
      status: 'success' 
    }
  ]
};
}
