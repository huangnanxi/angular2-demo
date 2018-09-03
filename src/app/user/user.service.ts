import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {UserInfo} from './userInfo';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginForm} from './LoginForm';
import {RegisterForm} from './RegisterForm';
import {Result} from '../common/entity/result';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  queryUserInfoList(): Observable<Result> {
    return this.http.get<Result>('/api/getUserInfoList');
  }

  login(loginForm: LoginForm): Observable<Result> {
    return this.http.post<Result>('/api/login', loginForm);
  }

  register(registerForm: RegisterForm): Observable<Result> {
    return this.http.post<Result>('/api/register', registerForm);
  }

  queryDetail(userName: string): Observable<Result> {
    return this.http.get<Result>(`/api/getUserInfo/${userName}`);
  }
}
