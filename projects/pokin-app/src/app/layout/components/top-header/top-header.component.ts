import { Component, Input, OnInit } from '@angular/core';
import { User } from 'pokin-model/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
