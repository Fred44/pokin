import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ClarityModule } from '@clr/angular';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginFormComponent,
    ForgotPasswordComponent,
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ClarityModule,
  ],
  providers: [
    AuthGuard,
  ]
})
export class AuthModule { }
