import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {}

  parseInvoice(file: File) {
    const form = new FormData();
    form.append('file', file);
    return this.http.post('/api/invoices/parse', form);
  }

  saveInvoice(data: any) {
    return this.http.post('/api/invoices/save', data);
  }

  getInvoices(params: any) {
    return this.http.get('/api/invoices', { params });
  }

  getDashboard() {
    return this.http.get('/api/dashboard');
  }
}