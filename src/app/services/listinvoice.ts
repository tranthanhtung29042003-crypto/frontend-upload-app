import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Invoice } from '../core/model/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class Listinvoice {


  private invoicesSubject = new BehaviorSubject<any[]>([]);
  
  invoices$ = this.invoicesSubject.asObservable();

  private cursor: string | null = null;
  private hasMore = true;

  private filters: any = {};
  constructor(private http: HttpClient) {}

  
  /**
   * Get new invoice limit (your original method)
   */
  getNewInvoiceLimit(): Observable<any> {
    return this.http.get('api/transactions/invoice/', {
      withCredentials: true,
    });
  }

  /**
   * Get transactions with cursor-based pagination
   */
  getTransactions(cursor: string | null = null): Observable<any> {
    let url = 'api/transactions/invoice/';

    if (cursor) {
      url += `?cursor=${encodeURIComponent(cursor)}`;
    }

    return this.http.get<any>(url, {
      withCredentials: true,
    });
  }

  getListInvoice(params: any): Observable<Invoice>{
    let htttParams = new HttpParams();

    Object.keys(params).forEach(key => {
      if (params[key]){
        htttParams = htttParams.set(key, params[key]);

      }
    })
    return this.http.get<Invoice>('api/list', {params: htttParams})
  }
}