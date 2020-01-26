import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { LoginComponentComponent } from './components/auth/login-component/login-component.component';
import { CreateComponent } from './components/user/create/create.component';
import { IndexComponent } from './components/user/index/index.component';
import { HttpClientModule } from '@angular/common/http';
// Services
import { AuthService } from './services/auth.service';
import { DataApiServiceService } from './services/data-api-service.service';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';

import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UsersService} from './services/users/users.service';
import {RolesService} from './services/roles/roles.service';
import {BranchesService} from './services/branches/branches.service';
import { ResponseModalComponent } from './components/layout/response-modal/response-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponentComponent,
    CreateComponent,
    IndexComponent,
    FooterComponent,
    AdminComponent,
    ResponseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, DataApiServiceService, UsersService, RolesService, BranchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
