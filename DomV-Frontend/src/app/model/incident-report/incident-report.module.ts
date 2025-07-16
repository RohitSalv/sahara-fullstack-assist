import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IncidentMedia {
  id: number;
  fileName: string;
  fileType: string;
}

export interface IncidentReport {
  id: number;
  incidentType: string;
  incidentDate: string;
  incidentLocation: string;
  description: string;
  contactName: string;
  contactMethod: string;
  contactEmail: string;
  contactPhone: string;
  mediaConsent: boolean;
  anonymous: boolean;
  mediaFiles: IncidentMedia[];  // ✅ include media array here
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IncidentReportModule { }
