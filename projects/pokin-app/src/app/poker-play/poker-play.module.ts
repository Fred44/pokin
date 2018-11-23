import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokerPlayComponent } from './containers/poker-play/poker-play.component';

const routes: Routes = [
  {
    path: '',
    component: PokerPlayComponent
  }
];

@NgModule({
  declarations: [
    PokerPlayComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PokerPlayModule { }
