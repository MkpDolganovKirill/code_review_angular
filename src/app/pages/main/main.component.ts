import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as Diff2Html from "diff2html";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { UsersDataService } from "../../services/users-data.service";
import { HttpHelperService } from "../../services/http-helper.service";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public lala: string = '';
  outputHtml: string | undefined;
  constructor(
    private http: HttpClient,
    private httpHelper: HttpHelperService,
    private router: Router,
    private usersService: UsersDataService,
  ) {
    this.init();
  }

  ngOnInit() {
    this.httpHelper.getAllUsers().subscribe(res => {
      this.usersService.userList.next(res.users);
      console.log(this.usersService.userList);
    })
  }

  init() {

  }
}
