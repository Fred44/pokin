import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  @Input() email: string;

  @Output() submitted = new EventEmitter<string>();
  @Output() cancelled = new EventEmitter<void>();

  forgotForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({
      email: [this.email, Validators.compose([Validators.email, Validators.required])]
    });
  }

  onSubmit() {
    this.submitted.emit(this.forgotForm.value.email);
  }

  onCancel() {
    this.cancelled.emit();
  }

  get emailCtrl() {
    return this.forgotForm.get('email');
  }
}
