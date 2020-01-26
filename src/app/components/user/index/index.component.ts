import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users/users.service';
import {UserInterface} from '../../../models/user-interface';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private usersService: UsersService) {
  }

  users: UserInterface[];
  loading = false;

  pagination = {
    total: 0,
    currentPage: 0,
    per_page: 0,
    last_page: 0,
    from: 0,
    to: 0
  };

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(page?) {
    this.loading = true;
    this.usersService.index(page).subscribe(data => {
      this.pagination = data.pagination;
      this.users = data.users.data;
      this.loading = false;
    });
  }

  isActive() {
    return this.pagination.currentPage;
  }

  pageNumber() {
    if (!this.pagination.to) {
      return [];
    }

    let from = this.pagination.currentPage - 2;

    if (from < 1) {
      from = 1;
    }

    let to = from + (2 * 2);

    if (to >= this.pagination.last_page) {
      to = this.pagination.last_page;
    }

    const pagesArray = [];

    while (from <= to) {
      pagesArray.push(from);
      from++;
    }

    return pagesArray;
  }

  changePage(page) {
    this.pagination.currentPage = page;
    this.getAllUsers(page);
    return false;
  }
}
