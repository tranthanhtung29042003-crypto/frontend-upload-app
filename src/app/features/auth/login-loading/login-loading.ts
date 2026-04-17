import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../services/user';
import { MatIconModule } from '@angular/material/icon';

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

  ngOnInit() {
    this.waitForLogin();
  }

  waitForLogin(retry = 0) {
  this.userService.getUser().subscribe(
    (res: any) => {
      console.log('Dữ liệu nhận được:', res); // <--- Thêm dòng này để debug
      if (res && res.logged_in) {
        console.log('Đang chuyển hướng sang dashboard...');
        this.router.navigate(['/dashboard']);
      } else {
        if (retry < 6) {
          setTimeout(() => this.waitForLogin(retry + 1), 500);
        } else {
          window.location.href = '/api/login';
        }
      }
    },
    err => {
      console.error('Lỗi gọi API:', err); // Nếu vẫn hiện ERR_FAILED, nó sẽ nhảy vào đây
      if (retry < 6) {
        setTimeout(() => this.waitForLogin(retry + 1), 500);
      }
    }
  );
}
}