import {Component, EventEmitter, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @Output()
  isLoggedIn = new EventEmitter<boolean>();

  constructor(private breakpointObserver: BreakpointObserver, private tokenStorageService: TokenStorageService) {}

  logOut() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
