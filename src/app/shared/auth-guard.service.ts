import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(): Observable<boolean>|Promise<boolean>|boolean {
    return this.authService.checkLoggedIn().map(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    });
  }
}
