import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RetryUpload {
constructor(private http: HttpClient) {}
retryInvoice(invoiceId: number) {
  
  return this.http.post('api/retry-invoice/', {
    invoice_id: invoiceId,
    withCredentials: true,
  },);
}
  
}
