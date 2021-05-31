import {Component, Input, OnInit} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Observable } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import {TokenStorageService} from "../../_services/token-storage.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = true;
  username?: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private userInfo: TokenStorageService) { }

  ngOnInit(): void {
    const user = this.userInfo.getUser();
    this.username = user.username;
  }

}
