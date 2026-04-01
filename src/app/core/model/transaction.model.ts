export interface InvoiceImg {
  id: string;
  imageUrl: string;
  status: 'success' | 'error' | 'processing';
  errorMessage?: string;
}

export interface Transaction {
  id: string;
  confidence: number;
  vendor: string;
  postingDate: string;
  currency: string;
  totalAmount: number;
  pages: InvoiceImg[]; // Thay vì chỉ mảng string, ta dùng mảng Object
}