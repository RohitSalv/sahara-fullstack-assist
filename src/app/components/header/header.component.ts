import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StealthModeService } from '../../services/stealth-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isStealthMode = false;
  isMenuOpen = false;

  constructor(private stealthModeService: StealthModeService) {}

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
}