import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as Diff2Html from "diff2html";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";

interface test {
  diff: string
}

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
    private router: Router,
  ) {
    this.init();
  }

  ngOnInit() {}

  init() {
    this.http.post<test>(`http://192.168.88.47:9999/ssh/repository/diff/get`, {
      "username": "Kirill",
      "projectName": "MyProject",
      "ip": "192.168.88.27",
      "repositoryPath": "/home/user/testFolderGit"
    }).subscribe(res => {
      this.outputHtml = Diff2Html.html(res.diff, { drawFileList: true, matching: 'lines', outputFormat: 'side-by-side' });
    })
  }
}
