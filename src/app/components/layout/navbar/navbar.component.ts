import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserInterface} from '../../../models/user-interface';
import {Router} from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  @Input() title: string;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  currentUser: UserInterface;

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

  onLogout(): void {
    this.authService.logout();
    location.reload();
  }

}
