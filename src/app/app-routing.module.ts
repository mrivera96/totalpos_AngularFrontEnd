import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponentComponent} from './components/auth/login-component/login-component.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import {AuthGuard} from './guards/auth.guard';
import {IndexComponent} from './components/user/index/index.component';

const routes: Routes = [
  {path: 'login', component: LoginComponentComponent},
  {path: 'dashboard/admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'user/index', component: IndexComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
