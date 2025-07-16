import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StealthModeService {
  private stealthModeState = new BehaviorSubject<boolean>(false);
  public stealthMode$ = this.stealthModeState.asObservable();

  constructor() {
    // Check localStorage for saved preference
    const savedState = localStorage.getItem('appMode');
    if (savedState === 'stealth') {
      this.stealthModeState.next(true);
      this.applyStealthMode(true);
    }
  }

  toggleStealthMode(): void {
    const newState = !this.stealthModeState.value;
    this.stealthModeState.next(newState);
    localStorage.setItem('appMode', newState ? 'stealth' : 'normal');
    this.applyStealthMode(newState);
  }

  private applyStealthMode(isStealthMode: boolean): void {
    const appTitle = document.querySelector('title');
    if (appTitle) {
      appTitle.textContent = isStealthMode ? 'Weather App' : 'Support Connect';
    }

    // Apply stealth mode styles to body
    document.body.classList.toggle('stealth-mode', isStealthMode);
  }
}