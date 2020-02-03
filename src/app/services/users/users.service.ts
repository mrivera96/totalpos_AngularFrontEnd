import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';
import {UserInterface} from '../../models/user-interface';
import {AuthService} from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  urlApi = 'http://api_totalpos.test/api/user/';
  constructor(private http: HttpClient, private authService: AuthService) {}
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.authService.getToken()}`
  });

  index(page?): Observable<any> {
    return this.http.get<UserInterface>(this.urlApi + `index?page=${page}`, {headers: this.headers}).pipe(
      map(data => data)
    );
  }

  store(user: UserInterface): Observable<any> {
    return this.http.post<UserInterface>(this.urlApi + 'store', { user }, {headers : this.headers}).pipe(
      map(data => data)
    );
  }
}
