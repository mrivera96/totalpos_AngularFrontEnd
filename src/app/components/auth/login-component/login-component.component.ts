import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../../app.component';
import {AuthService} from '../../../services/auth.service';
import {UserInterface} from '../../../models/user-interface';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html'
})
export class LoginComponentComponent implements OnInit {
  constructor(private appComponent: AppComponent, private authService: AuthService, private router: Router, private locat: Location) {
    if (authService.getCurrentUser()) {
      router.navigate(['dashboard/admin']);
    }
    this.appComponent.title = 'Login';
  }

  private user: UserInterface = {
    username: '',
    password: ''
  };

  private error = false;
  private errMessage = '';

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (form.valid) {
      return this.authService.login(this.user.username, this.user.password)
        .subscribe(data => {
            this.authService.setUser(data.user);
            const token = data.access_token;
            this.authService.setToken(token);
            if (this.authService.getCurrentUser().role_id === 1) {
              location.reload();
            }
          },
          err => {
            if (err.status === 401) {
              this.error = true;
              this.errMessage = err.error.message;
            }
          }
        );
    } else {
      this.error = true;
      this.errMessage = 'Estos campos son obligatorios.';
    }
  }


}
