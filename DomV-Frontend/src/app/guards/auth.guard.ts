import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];
    const userRole = this.auth.getRole();

    if (!this.auth.isLoggedIn()) {
      alert('Login required!');
      this.router.navigate(['/login']);
      return false;
    }

    if (expectedRole && expectedRole !== userRole) {
      alert('Unauthorized Access!');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
