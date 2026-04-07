import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Detail {
  constructor(private http: HttpClient) {}
   getInvoiceDetail(transaction_id: number) { 
   return this.http.get(
    `api/detail/${transaction_id}/`,
    {
      withCredentials: true
    }
  );
  
}
}