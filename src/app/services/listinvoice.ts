import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Listinvoice {
  constructor(private http: HttpClient) {}
   getNewInvoiceLimit(): Observable<any>{
      return this.http.get(`api/transactions/invoice/`,{
      withCredentials: true
    });

    
}
getTransactions(cursor: string | null = null) {
  let url = 'http://127.0.0.1:9000/api/transactions/invoice/';

  if (cursor) {
    url += `?cursor=${cursor}`;
  }

  return this.http.get<any>(`api/transactions/invoice/{{ url}},{
    withCredentials: true
  });
}
}
