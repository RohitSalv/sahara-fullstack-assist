import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StealthModeService } from '../../services/stealth-mode.service';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent {
  isStealthMode = false;
  reportForm: FormGroup;
  reportSubmitted = false;
  
  constructor(
    private stealthModeService: StealthModeService,
    private fb: FormBuilder
  ) {
    this.stealthModeService.stealthMode$.subscribe(isStealthMode => {
      this.isStealthMode = isStealthMode;
    });
    
    this.reportForm = this.fb.group({
      incidentType: ['', Validators.required],
      incidentDate: ['', Validators.required],
      incidentLocation: [''],
      description: ['', Validators.required],
      contactName: [''],
      contactMethod: ['email'],
      contactEmail: ['', Validators.email],
      contactPhone: [''],
      mediaConsent: [false],
      anonymous: [false]
    });
  }
  
  onSubmit(): void {
    if (this.reportForm.valid) {
      // In a real application, this would send data securely to a backend
      console.log('Report submitted:', this.reportForm.value);
      this.reportSubmitted = true;
      
      // Reset form after 5 seconds for security
      setTimeout(() => {
        this.reportForm.reset();
        this.reportSubmitted = false;
      }, 5000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.reportForm.controls).forEach(field => {
        const control = this.reportForm.get(field);
        control?.markAsTouched();
      });
    }
  }
  
  // For the stealth mode (weather app)
  onStealthSubmit(): void {
    // Pretend to submit weather feedback
    this.reportSubmitted = true;
    setTimeout(() => {
      this.reportSubmitted = false;
    }, 3000);
  }
}