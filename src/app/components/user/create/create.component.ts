import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsersService} from '../../../services/users/users.service';
import {UserInterface} from '../../../models/user-interface';
import {RolesService} from '../../../services/roles/roles.service';
import {Role} from '../../../models/role';
import {Branch} from '../../../models/branch';
import {BranchesService} from '../../../services/branches/branches.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private usersService: UsersService, private rolesService: RolesService, private branchesService: BranchesService) {

  }

  private user: UserInterface = {
    name: '',
    last_name: '',
    dni: '',
    birthday: null,
    mobile: null,
    address: '',
    email: '',
    username: '',
    avatar: '',
    role_id: null,
    branch_id: null
  };

  errors = [];

  ngOnInit() {

  }


  onSubmit(form: NgForm) {
    if (form.valid) {
      return this.usersService.store(this.user)
        .subscribe(data => {
          alert('Usuario creado con éxito.');
        },
          err => {
            if (err.status === 422) {
              this.errors = err.error.errors;
              console.log(this.errors);
            }
          });
    }
  }

}
