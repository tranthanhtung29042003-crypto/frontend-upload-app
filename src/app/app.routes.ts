import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { Main } from './page/main/main';
import { Auth } from './page/auth/auth';

export const routes: Routes = [

  // AUTH LAYOUT (NO SIDEBAR)
  {
    path: 'auth',
    component: Auth,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login').then(m => m.Login)
      },
      {
        path: 'login-loading',
        loadComponent: () =>
          import('./features/auth/login-loading/login-loading').then(m => m.LoginLoading)
      },
    
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },

  // MAIN APP (CÓ SIDEBAR)
  {
    path: '',
    component: Main,
    canActivate: [authGuard], // 🔥 chỉ để ở đây
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
        path: 'detail/:transaction_id',
        loadComponent: () =>
          import('./features/transaction/transaction-review/transaction-review').then(m => m.TransactionReview)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },

  // fallback
  // {
  //   path: '**',
  //   redirectTo: 'auth/login'
  // }
];