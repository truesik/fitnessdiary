import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';
import User from '../shared/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  login(form) {
    this.authService.login(form).subscribe(
      (user: User) => {
        this.router.navigate(['/profile']);
      },
      error => console.log(error)
    );
  }
}
