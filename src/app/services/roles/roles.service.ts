import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';
import {Role} from '../../models/role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  urlApi = 'http://totalpos_api.test/api/role/';
  constructor(private http: HttpClient, private authService: AuthService) { }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.authService.getToken()}`
  });

  index(): Observable<any> {
    return this.http.get<Role>(this.urlApi + 'index', {headers: this.headers}).pipe(
      map(data => data)
    );
  }
}
