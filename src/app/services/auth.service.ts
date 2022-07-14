import { Injectable } from '@angular/core';
import { HttpHelperService } from "./http-helper.service";
import { catchError, finalize, of } from 'rxjs';
import { ErrorService } from './error.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpHelperService, private router: Router) { }

  public checkUser(): void {
    this.http
      .checkUser()
      .pipe(
        catchError((err) => {
          return of(null);
        })
      ).subscribe((result: any) => {
        if (result?.user) {
          localStorage.setItem('username', result.user.username);
          localStorage.setItem('ip', result.user.ip);
          this.router.navigate(['/main']);
        }
    })
  }

  public createUser(username: string): void {
    this.http
      .createUser(username)
      .pipe(
        catchError((err) => {
          return of(null);
        })
      ).subscribe((result: any) => {
      if (result) {
        localStorage.setItem('username', result.user.username);
        localStorage.setItem('ip', result.user.ip);
        this.router.navigate(['/main']);
      }
    })
  }
}
