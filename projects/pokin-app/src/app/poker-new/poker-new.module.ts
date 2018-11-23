import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PokerNewComponent } from './containers/poker-new/poker-new.component';

const routes: Routes = [
  {
    path: '',
    component: PokerNewComponent
  }
];

@NgModule({
  declarations: [PokerNewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PokerNewModule { }
