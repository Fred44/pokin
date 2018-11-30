import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { ShellComponent } from './containers/shell/shell.component';
import { RouterModule } from '@angular/router';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    NotFoundComponent,
    ShellComponent,
    TopHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule,
  ],
  exports: [
    NotFoundComponent,
    ShellComponent,
  ]
})
export class LayoutModule { }
