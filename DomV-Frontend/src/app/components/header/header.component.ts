import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StealthModeService } from 'src/app/services/stealth-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isStealthMode = false;
  isMenuOpen = false;

  constructor(private stealthModeService: StealthModeService,public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.stealthModeService.stealthMode$.subscribe(isStealthMode => {
      this.isStealthMode = isStealthMode;
    });
  }

  toggleStealthMode(): void {
    this.stealthModeService.toggleStealthMode();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getRole(): string {
    return this.authService.getRole();
  }
}