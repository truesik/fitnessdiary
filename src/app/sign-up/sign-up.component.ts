import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';
import User from '../shared/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private userService: UserService) {
  }

  register(form): void {
    console.log(form);
    this.userService.addUser(new User(form));
  }
}
