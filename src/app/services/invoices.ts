import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoicesServices {
  private invoicesSubject = new BehaviorSubject<any[]>([]);
  invoices$ = this.invoicesSubject.asObservable();
  
  private loadingSubject = new BehaviorSubject<boolean>(false);
loading$ = this.loadingSubject.asObservable();
  private totalItemsSubject = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItemsSubject.asObservable();
  private cursor: string | null = null;
  private hasMore = true;
  
  private filters: any = {};  

  constructor(private http: HttpClient){}

  setFilters(filters: any){
    this.filters = { ...this.filters, ...filters };
    this.cursor = null;
    this.hasMore = true;
    this.invoicesSubject.next([])

    this.loadListInvoices();
  }
  setArchive(status: string){
    if(status === 'ALL'){
      delete this.filters.status;
    } else if (status === 'OK'){
      this.filters.status = 'OK';
    } else if (status === 'ERROR'){
      this.filters.status = 'ERROR';
    }
    this.cursor = null;
  this.invoicesSubject.next([]);
  this.loadListInvoices();
  }

  loadListInvoices() {
    this.loadingSubject.next(true);

    let params = new HttpParams().set('page_size', 8);
    if (this.cursor) {
        params = params.set('cursor', this.cursor);
    }

    Object.keys(this.filters).forEach(key => {
        if (this.filters[key] !== null && this.filters[key] !== undefined && this.filters[key] !== '') {
            params = params.set(key, this.filters[key]);
        }
    });

    this.http.get<any>('api/invoice_list/', { params }).subscribe(res => {
       
        const newData = res.invoices || [];
        if (this.cursor) {
            const currentData = this.invoicesSubject.value;
            this.invoicesSubject.next([...currentData, ...newData]);
        } else {
            this.invoicesSubject.next(newData);
        }

        this.cursor = res.next_cursor;
        this.hasMore = res.has_more;
        
        if (res.total_count !== undefined) {
            this.totalItemsSubject.next(res.total_count);
        }
        this.loadingSubject.next(false);
    });
}

  loadMore(){
    if(this.hasMore){
      this.loadListInvoices();
    }
  }
}
