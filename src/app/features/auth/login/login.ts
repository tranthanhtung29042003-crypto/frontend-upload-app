import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private router: Router) {}

  login() {
    // 👉 chuyển sang trang loading trước
    this.router.navigate(['auth/login-loading']);
  }
}


