import { Component, OnInit, signal, computed } from '@angular/core'; // Thêm computed
import { Transaction } from '../../../core/model/transaction.model';
import { InvoiceViewer } from '../invoice-viewer/invoice-viewer';
import { TransactionHeader } from '../transaction-header/transaction-header';
import { TransactionForm } from '../transaction-form/transaction-form';
import { TransactionFooter } from '../transaction-footer/transaction-footer';
import { ActivatedRoute } from '@angular/router';
import { Detail } from '../../../services/detail';
// ... các imports khác giữ nguyên

@Component({
  selector: 'app-transaction-review',
  standalone: true,
  imports: [InvoiceViewer, TransactionHeader, TransactionForm, TransactionFooter],
  templateUrl: './transaction-review.html',
  styleUrl: './transaction-review.scss',
})
export class TransactionReview implements OnInit {
  // Khai báo đúng kiểu Signal
  data = signal<Transaction | null>(null);
  loading = signal<boolean>(false);
  
  // Computed sẽ tự động chạy lại mỗi khi data() thay đổi
  invoiceCount = computed(() => this.data()?.pages.length || 0);

  constructor(
    private route: ActivatedRoute,
    private service: Detail
  ) {}

  ngOnInit() {
    const transaction_id = Number(this.route.snapshot.paramMap.get('transaction_id'));
    if (transaction_id) this.fetchData(transaction_id);
  }

  fetchData(transaction_id: number) {
    // SỬA: Dùng .set() cho signal
    this.loading.set(true); 

    this.service.getInvoiceDetail(transaction_id).subscribe({
      next: (res: any) => {
        // SỬA: Dùng .set() để cập nhật giá trị cho signal
        const mapped = this.mapToUI(res);
        this.data.set(mapped); 
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  mapToUI(res: any): Transaction {
    const invoices = res.invoices || [];
    return {
      id: res.transaction_id,
      name: res.transaction_name,
      pages: invoices.map((inv: any) => ({
        imageUrl: inv.image_link,
        status: inv.status === 'ERROR' ? 'error' : 'success',
        errorMessage: inv.status === 'ERROR' ? 'AI extraction failed' : '',
        items: inv.items || []
      })),
      vendor: invoices[0]?.vendor_name || 'N/A',
      totalAmount: invoices.reduce((sum: number, inv: any) => sum + (Number(inv.total) || 0), 0),
      postingDate: new Date().toISOString().split('T')[0],
      currency: 'VND'
    };
  }
}