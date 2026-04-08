import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TransactionResponse } from '../core/model/transaction.model';

@Injectable({ providedIn: 'root' })
export class DetailService {
  private http = inject(HttpClient); // Sử dụng inject() cho đồng bộ với Angular 20

  getInvoiceDetail(transaction_id: string): Observable<TransactionResponse> {
    return this.http.get<TransactionResponse>(`/api/detail/${transaction_id}/`, {
      withCredentials: true
    });
  }
}