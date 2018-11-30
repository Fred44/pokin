import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Credential, ServerError } from 'pokin-model/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  mode = LogInMode.LogIn;
  pending = false;
  target = '/';

  passErr: ServerError;

  constructor(private router: Router) { }

  showMode(mode: LogInMode) {
    if (!this.pending) {
      this.mode = mode;
    }
  }

  passwordLogin(credential: Credential) {
  }

  googleLogin() {
  }

  recoverPassword(email: string) {
  }

  close() {
    this.router.navigateByUrl(this.target);
  }

}

enum LogInMode {
  LogIn           = 'login',
  forgotPassword  = 'forgot',
}
