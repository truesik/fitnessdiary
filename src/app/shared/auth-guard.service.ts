import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService) {
  }

  canActivate(): Observable<boolean>|Promise<boolean>|boolean {
    return this.authService.checkLoggedIn();
  }
}
