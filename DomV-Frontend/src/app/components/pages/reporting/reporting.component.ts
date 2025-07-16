import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StealthModeService } from '../../../services/stealth-mode.service';
import { IncidentReportService } from 'src/app/services/incident-report.service';

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
  selectedFiles: File[] = [];

  constructor(
    private stealthModeService: StealthModeService,
    private fb: FormBuilder,
    private reportService: IncidentReportService
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

  // Handle file input
  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFiles = Array.from(event.target.files);
    }
  }

  // Submit form + media
  onSubmit(): void {
    if (this.reportForm.valid) {
      const reportData = this.reportForm.value;

      // Submit report first
      this.reportService.addReport(reportData).subscribe({
        next: (createdReport) => {
          console.log('Report created:', createdReport);

          // If media files selected, upload each
          if (this.selectedFiles.length > 0) {
            this.selectedFiles.forEach(file => {
              this.reportService.uploadMedia(createdReport.id, file).subscribe({
                next: (msg) => console.log(msg),
                error: (err) => console.error('Upload failed:', err)
              });
            });
          }

          this.reportSubmitted = true;
          setTimeout(() => {
            this.reportForm.reset();
            this.selectedFiles = [];
            this.reportSubmitted = false;
          }, 5000);
        },
        error: (err) => {
          console.error('Report creation failed:', err);
        }
      });

    } else {
      Object.keys(this.reportForm.controls).forEach(field => {
        const control = this.reportForm.get(field);
        control?.markAsTouched();
      });
    }
  }

  onStealthSubmit(): void {
    this.reportSubmitted = true;
    setTimeout(() => {
      this.reportSubmitted = false;
    }, 3000);
  }
}