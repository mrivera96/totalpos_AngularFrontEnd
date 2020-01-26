import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ngxSpinnerService: NgxSpinnerService, private authService: AuthService, private router: Router) {
    if (authService.getCurrentUser()) {
      router.navigate(['dashboard/admin']);
    } else {
      router.navigate(['login']);
    }
  }
  title = 'Total POS';

  ngOnInit(): void {
    this.spinner();
  }

  spinner(): void {
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    },
      2000);
  }
}
