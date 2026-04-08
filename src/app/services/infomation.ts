import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Infomation {
  constructor(private http: HttpClient) {}

   getInvoiceCount(): Observable<any> {
     return this.http.get('api/getinfo/invoice-count/',
      {
    withCredentials: true
  });
  }
    getErrorInvoiceCount(): Observable<any> {
     return this.http.get('api/getinfo/error-invoice-count/',
      {
    withCredentials: true
  });
  }

  getTransactionCount(): Observable<any> {
    return this.http.get(`api/getinfo/transaction-count/`,
      {
    withCredentials: true
  }
    );
  }

  getTotalAmount(): Observable<any> {
    return this.http.get(`api/getinfo/total/`,{
    withCredentials: true
  });
  }

  getTotalToday(): Observable<any> {
    return this.http.get(`api/getinfo/total_today/`,{
    withCredentials: true
  });
  }

  getInvoiceSumary(): Observable<any>{
    return this.http.get(`api/invoice_sumary/`,{
    withCredentials: true
  });
  }
  getNewInvoiceLimit(): Observable<any>{
    return this.http.get(`api/invoice_newest_limit/`,{
    withCredentials: true
  });
}
}
