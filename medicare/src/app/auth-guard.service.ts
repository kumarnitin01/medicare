import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
//import { AuthService } from './auth.service';
import { CookieService } from './cookieService/cookie.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, private cookieService: CookieService) {}
  canActivate(): boolean {
    if (!this.cookieService.getCookie('status')) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
