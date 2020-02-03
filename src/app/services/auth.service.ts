import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';
import {UserInterface} from '../models/user-interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private urlApi = 'http://api_totalpos.test/api/auth/';

  login(username: string, password: string): Observable<any> {
    return this.http.post<UserInterface>(this.urlApi + 'login', { username, password }, {headers : this.headers})
      .pipe(
        map(data => data )
      );
  }

  setUser(user: UserInterface): void {
    const userString = JSON.stringify(user);
    localStorage.setItem( 'currentUser' , userString);
  }

  setToken(token): void {
    localStorage.setItem('tkn', token);
  }

  getToken(): string {
    const tkn = localStorage.getItem('tkn');
    return tkn;
  }

  getCurrentUser(): UserInterface {
    const userString = localStorage.getItem('currentUser');
    if ( !isNullOrUndefined(userString) ) {
      const user: UserInterface = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
  }

  logout() {
    const tkn = localStorage.getItem('tkn');
    localStorage.removeItem('tkn');
    localStorage.removeItem('currentUser');
    return this.http.get(this.urlApi + 'logout', {headers : this.headers})
      .pipe(
        map(data => data )
      );
  }
}
