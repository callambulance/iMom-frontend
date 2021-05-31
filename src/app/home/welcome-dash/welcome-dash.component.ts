import { Component, OnInit } from '@angular/core';
import {LoginPageComponent} from "../../login-page/login-page.component";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-welcome-dash',
  templateUrl: './welcome-dash.component.html',
  styleUrls: ['./welcome-dash.component.scss']
})
export class WelcomeDashComponent implements OnInit {

  username?: string;
  week = 10;
  babyLength = 3;
  babyWeight = 5;
  date = new Date();
  showDate = this.date.toLocaleDateString('en-GB', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});

  constructor(private userInfo: TokenStorageService) { }

  ngOnInit(): void {
    const user = this.userInfo.getUser();
    this.username = user.username;
    console.log(user.name);
    // this.username = LoginPageComponent.userName;
  }

}
