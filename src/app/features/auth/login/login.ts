import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  login() {
  // this.auth.loginGoogle().subscribe((res: any) => {
  //   window.location.href = res.auth_url;
  // });
}

}
