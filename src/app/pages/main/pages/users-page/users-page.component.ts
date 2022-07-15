import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UsersDataService } from "../../../../services/users-data.service";
import { IUser } from "src/app/interfaces/users.interfaces";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  public users: IUser[] = [];

  constructor(private router: Router, private usersDataService: UsersDataService) { }

  ngOnInit(): void {
    this.usersDataService.userList.subscribe(res => {
      this.users = res;
    })
  }

  public goToUserPage(user: any): void {
    this.router.navigate([`/main/profile/${user._id}`]);
  }
}
