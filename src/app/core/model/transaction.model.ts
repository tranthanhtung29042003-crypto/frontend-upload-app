export interface InvoiceItem {
  item_name: string;
  quantity: number;
  unit_price: number;
  amount: number;
}

export type InvoiceStatus = 'success' | 'error' ;

export interface InvoiceImg {
  imageUrl: string;
  status: InvoiceStatus;
  errorMessage?: string;
  items: InvoiceItem[];
}

export interface Transaction {
  id: string;
  name: string;

  pages: InvoiceImg[];

  vendor: string;
  totalAmount: number;
  postingDate: string;
  currency: string;
}