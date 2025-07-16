import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private userService: UserService, 
    private authService: AuthService, 
    private router: Router) {}

  loginRequest = {
    mob: '',
    password: ''
  }

  loginUser() {
    this.userService.loginUser(this.loginRequest).subscribe(res => {
      if (res) {
        this.authService.saveUser(res);

        if (res.role === 'ADMIN') {
          this.router.navigateByUrl('/admin-services');
        } else {
          this.router.navigateByUrl('/user-services');
        }
      } else {
        alert("Invalid credentials!");
      }
    })
  }

}
