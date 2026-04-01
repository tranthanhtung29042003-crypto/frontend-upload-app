import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [

  // AUTH
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then(m => m.Login)
  },
  {
    path: 'login-success',
    loadComponent: () =>
      import('./features/auth/login-success/login-success').then(m => m.LoginSuccess)
  },

  // MAIN APP
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'upload',
        loadComponent: () =>
          import('./features/upload/upload-page/upload-page').then(m => m.UploadPage)
      },
      {
        path: 'invoices',
        loadComponent: () =>
          import('./features/invoice/invoice-list/invoice-list').then(m => m.InvoiceList)
      },

 {
        path: 'detail',
        loadComponent: () =>
          import('./features/transaction/transaction-review/transaction-review').then(m => m.TransactionReview)
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }



    ]
  }
];