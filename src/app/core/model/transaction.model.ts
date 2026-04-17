export interface InvoiceItem {
  amount: number;
  unit_price: number;
  quantity: number;
  item_name: string;
}

export interface Invoice {
  id: string;
  category: string;
  transaction_id: string;
  invoice_number: string;
  image_link: string;
  invoice_id: string;
  sheet_link: string;
  items: InvoiceItem[];
  vendor_name: string;
  total: number;
  status: string;
  created_at: Date
}


export interface TransactionResponse {
  transaction_id: string;
  transaction_name: string;
  invoices: Invoice[];
}