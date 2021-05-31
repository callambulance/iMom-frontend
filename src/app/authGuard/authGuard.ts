import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../_services/auth.service';
import {Observable} from 'rxjs';
import {TokenStorageService} from '../_services/token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(protected router: Router, protected tokenStorageService: TokenStorageService)
  {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.tokenStorageService.getToken() === null) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
