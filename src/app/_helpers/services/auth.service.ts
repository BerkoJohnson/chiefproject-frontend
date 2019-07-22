import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export interface IUser {
  email: string;
  password?: string;
  role: string;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: variable-name
  _user = new BehaviorSubject<IUser>(this.decodeToken() || null);
  user$ = this._user.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  get token(): string {
    return window.localStorage.getItem('cp-token');
  }

  saveToken(token: string): void {
    window.localStorage.setItem('cp-token', token);
  }

  decodeToken(): IUser {
    if (!this.token) {
      return null;
    }
    const details = this.token.split('.')[1];
    return JSON.parse(window.atob(details));
  }

  verifyToken(): boolean {
    if (!this.token) {
      return false;
    }

    const now = new Date().getTime();
    const date = ((now / 1000) as unknown) as string;
    const user = this.decodeToken();
    const isVerified = user.exp > parseInt(date, 10);
    isVerified ? this._user.next(user) : this._user.next(null);
    return isVerified;
  }

  login(email: string, password: string) {
    return this.http
      .post('/api/users/login', { login: {email, password} }, { observe: 'response' })
      .pipe(
        map(res => {
          if (res.headers.get('auth')) {
            this.saveToken(res.headers.get('auth'));
            this.verifyToken();
          }

          return res.body;
        })
      );
  }


  logout() {
    window.localStorage.removeItem('cp-token');
    this._user.next(null);
    this.router.navigateByUrl('/login');
  }
}
