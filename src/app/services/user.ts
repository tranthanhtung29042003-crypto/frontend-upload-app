import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class User {


   constructor(private http: HttpClient) {}

  loginGoogle() {
    window.location.href = '/api/login';
  }

  getUser() {
    return this.http.get('/api/user',
      {
    withCredentials: true
  }
    );
  }
}
export interface UserResponse {
  logged_in: boolean;
  user?: string;
  email?: string;
}
