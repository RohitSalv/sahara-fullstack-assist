import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncidentReport } from '../model/incident-report/incident-report.module';

@Injectable({
  providedIn: 'root'
})
export class IncidentReportService {

  private baseUrl = 'http://localhost:8092/support-recovery/reports';

  constructor(private http: HttpClient) { }

  // Submit the incident report JSON first
  addReport(report: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, report);
  }

  // Upload media file for a specific report ID
  uploadMedia(reportId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/${reportId}/upload`, formData, {
      responseType: 'text'
    });
  }

  // Fetch all reports (optional)
  getReports(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Fetch media by ID (optional)
  getMedia(mediaId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/media/${mediaId}`, { responseType: 'blob' });
  }

deleteReport(id: number): Observable<any> {
  return this.http.delete(`http://localhost:8092/support-recovery/reports/${id}`, { responseType: 'text' });
}

getAllReports(): Observable<IncidentReport[]> {
  return this.http.get<IncidentReport[]>(`${this.baseUrl}`);
}



}
