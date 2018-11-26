import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _user;
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public get user() {
    return this._user || {};
  }

  public set user(user) {
    if (user) {
      this._user = user;
      console.log(JSON.stringify(user));
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  public startSmartIdAuth(idCode: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/smart-id/auth`, {idCode: idCode});
  }

  public pollSmartId(sessionId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/smart-id/poll`, {sessionId: sessionId});
  }
}
