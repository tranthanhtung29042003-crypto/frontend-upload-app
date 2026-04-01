import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { map } from 'rxjs/operators';

export const AuthGuard = () => {
  // const auth = inject(Auth);
  // const router = inject(Router);

  // return auth.checkAuth().pipe(
  //   map((res: any) => {
  //     if (!res.authenticated) {
  //       router.navigate(['/login']);
  //       return false;
  //     }
  //     return true;
  //   })
  // );
};
