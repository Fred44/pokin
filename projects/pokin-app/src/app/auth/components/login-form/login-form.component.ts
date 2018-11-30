import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Credential, ServerError } from 'pokin-model/core';
import { unsubscribe } from '../../../shared/helpers';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  @Input() error: ServerError;

  @Output() submitted = new EventEmitter<Credential>();
  @Output() forgotten = new EventEmitter<string>();

  loginForm: FormGroup;

  private subs: Subscription[] = [];

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      rememberMe: true
    });
  }

  ngOnInit() {
    this.subs.push(
      this.loginForm.valueChanges.subscribe(() => this.error = null)
    );
  }

  ngOnDestroy() {
    unsubscribe(this.subs);
  }

  onSubmit() {
    this.submitted.emit(this.loginForm.value);
  }

  onForgot() {
    this.forgotten.emit(this.loginForm.value.email);
  }

}
