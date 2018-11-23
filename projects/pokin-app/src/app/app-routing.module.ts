import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, RegisterComponent } from './auth';
import { NotFoundComponent, ShellComponent } from './layout';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'welcome',
    loadChildren: './welcome/welcome.module#WelcomeModule',
    component: ShellComponent
  },
  {
    path: 'my-profile',
    loadChildren: './my-profile/my-profile.module#MyProfileModule',
    component: ShellComponent
  },
  {
    path: 'poker-new',
    loadChildren: './poker-new/poker-new.module#PokerNewModule',
    component: ShellComponent
  },
  {
    path: 'poker-play',
    loadChildren: './poker-play/poker-play.module#PokerPlayModule',
    component: ShellComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
