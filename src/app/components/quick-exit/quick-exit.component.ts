import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-exit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-exit.component.html',
  styleUrls: ['./quick-exit.component.css']
})
export class QuickExitComponent {
  quickExit(): void {
    // Clear browser history if possible
    if (window.history && window.history.pushState) {
      window.history.pushState('', document.title, window.location.pathname);
    }
    
    // Redirect to a safe site
    window.location.href = 'https://www.weather.com';
  }
}