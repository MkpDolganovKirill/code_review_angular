import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of } from "rxjs";
import { HttpHelperService } from "./http-helper.service";
import { IUser } from "src/app/interfaces/users.interfaces";


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  public userList = new BehaviorSubject<IUser[]>([]);
  public innerUser = new BehaviorSubject<IUser | null>(null);
  constructor(private http: HttpHelperService) { }

  public updateUsersList () {
    this.http.getAllUsers()
      .pipe(
        catchError(err => {
          console.log(err);
          return of (null);
        })
      )
      .subscribe(res => {
        this.userList.next(res.users);
      })
  }

}
