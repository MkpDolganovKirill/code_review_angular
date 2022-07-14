import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userIp = '';
  public userName = '';

  constructor() { }

  ngOnInit(): void {
    this.userIp = localStorage.getItem('ip') || 'unknown';
    this.userName = localStorage.getItem('username') || 'unknown';
  }

}
