import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from '../../../models/user-interface';
import {Role} from '../../../models/role';
import {Branch} from '../../../models/branch';
import {RolesService} from '../../../services/roles/roles.service';
import {BranchesService} from '../../../services/branches/branches.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  @Input() user: UserInterface;
  @Input() errors = [];
  roles: Role[];
  branches: Branch[];

  //@Output() storedUser: EventEmitter<NgForm>;

  constructor( private rolesService: RolesService,
               private branchesService: BranchesService) {
    this.loadRoles();
    this.loadBranches();
  }

  ngOnInit() {
  }

  loadRoles() {
    return this.rolesService.index().subscribe(data => {
      this.roles = data.roles;
    });
  }

  loadBranches() {
    return this.branchesService.index().subscribe( data => {
      this.branches = data. branches;
    });
  }


}
