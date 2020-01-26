import { Component, OnInit } from '@angular/core';
import {UserInterface} from '../../../models/user-interface';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  currentUser: UserInterface;
  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

}
