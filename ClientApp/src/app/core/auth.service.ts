import { ApplicationException } from './../exception-handling/application-exception';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:5000/';

  constructor(private httpService: HttpService) { }

  private loggedIn = false;
  private userName: string;

  authenticate(username: string, password: string): Observable<string> {

    this.userName = username;

    const params = new HttpParams()
                  .set('username', username)
                  .set('password', password);

    if (username === password) {
      this.loggedIn = true;
      return this.httpService.get(this.BASE_URL + 'api/token/login', params);
    }
  }

  get IsLoggedIn() {
    return this.loggedIn;
  }

  logoutSession() {
    this.loggedIn = false;
    return this.loggedIn;
  }

  getUserName() {
    return this.userName;
  }
}
