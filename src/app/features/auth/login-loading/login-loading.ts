import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../services/user';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-loading',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './login-loading.html',
  styleUrls: ['./login-loading.scss'],
})
export class LoginLoading implements OnInit {

  constructor(
    private userService: User,
    private router: Router
  ) { }

 private destroy$ = new Subject<void>();
  isChecking = false;

  ngOnInit() {
  this.userService.getUser().subscribe((res: any) => {
    if (res?.logged_in) {
      this.router.navigate(['/dashboard']);
    } else {
      window.location.href = '/api/login';
    }
  });
}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


}