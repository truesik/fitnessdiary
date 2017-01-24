import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  logout() {
    this.authService.logout().subscribe(result => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
}
