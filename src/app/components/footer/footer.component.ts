import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StealthModeService } from '../../services/stealth-mode.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isStealthMode = false;
  currentYear = new Date().getFullYear();

  constructor(private stealthModeService: StealthModeService) {}

  ngOnInit(): void {
    this.stealthModeService.stealthMode$.subscribe(isStealthMode => {
      this.isStealthMode = isStealthMode;
    });
  }
}