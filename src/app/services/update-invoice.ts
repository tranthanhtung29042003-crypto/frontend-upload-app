import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UpdateInvoice {
  constructor(private http: HttpClient) { }

  updateInvoice(payload: any) {
    console.log("themdata",payload)
    return this.http.post('/api/update-invoice/', payload,{
    withCredentials: true
  }

    );
  }

}


