import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from '../_services/auth.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {WebRequestService} from '../web-request.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public userName?: string;
  public id?: string;
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  socialUser?: SocialUser;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
              private socialAuthService: SocialAuthService, private web: WebRequestService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedIn = (user != null);
      console.log(this.socialUser);
  });
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log(data.username);
        console.log(data.id);
        this.userName = data.username;
        this.id = data.id;
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.replace("/home");
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      this.authService.googleLogin(userData.idToken).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          console.log(data.username);
          console.log(data.id);
          this.userName = data.username;
          this.id = data.id;
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.reloadPage();
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    });
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
