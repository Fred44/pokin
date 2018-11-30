import { Component, OnInit } from '@angular/core';

import { Registration, ServerError } from 'pokin-model/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitRegistration(registration: Registration) {
  }

}
