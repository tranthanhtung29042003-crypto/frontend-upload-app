
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient) {}

  loginGoogle() {
    return this.http.get('/api/auth/google');
  }

  checkAuth() {
    return this.http.get('/api/auth/check');
  }

}
