import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public username: string;

  constructor(private router: Router) {
    this.username = localStorage.getItem("username") || "";
  }

  ngOnInit(): void {

  }

  public goToUsersPage(): void {
    this.router.navigate(['/main/users']);
  }

  public goToCurrentUser(): void {
    this.router.navigate([`main/profile/${localStorage.getItem('userId')}`]);
  }
}
