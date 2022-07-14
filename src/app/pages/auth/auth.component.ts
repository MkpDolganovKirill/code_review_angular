import { Component, HostListener, OnInit } from '@angular/core';
import { HttpHelperService } from "../../services/http-helper.service";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public usernameField: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.checkUser();
  }

  @HostListener('document:keydown.enter')
  onKeyDown() {
    this.authService.createUser(this.usernameField);
  }

}
