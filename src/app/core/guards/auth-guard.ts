import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { map, catchError, of } from 'rxjs';
import { User } from '../../services/user';

export const authGuard = (p0: RouterStateSnapshot | ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const userService = inject(User);

  return userService.getUser().pipe(
    map((resquest: any) => {
      if (resquest.logged_in) {
        return true;
      } else {
        router.navigate(['/auth/login']);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['/auth/login']);
      return of(false);
    })
  );
};
