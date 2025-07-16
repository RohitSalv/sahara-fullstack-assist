import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// Update the path below if the service is located elsewhere
import { StealthModeService } from '../../../services/stealth-mode.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isStealthMode = false;

  constructor(private stealthModeService: StealthModeService) {
    this.stealthModeService.stealthMode$.subscribe(isStealthMode => {
      this.isStealthMode = isStealthMode;
    });
  }
}