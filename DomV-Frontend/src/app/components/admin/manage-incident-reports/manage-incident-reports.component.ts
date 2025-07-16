import { Component, OnInit } from '@angular/core';
import { IncidentReport } from 'src/app/model/incident-report/incident-report.module';
import { IncidentReportService } from 'src/app/services/incident-report.service';

@Component({
  selector: 'app-manage-incident-reports',
  templateUrl: './manage-incident-reports.component.html',
  styleUrls: ['./manage-incident-reports.component.css']
})
export class ManageIncidentReportsComponent implements OnInit {
reports: IncidentReport[] = [];

  constructor(private reportService: IncidentReportService) {}

  ngOnInit(): void {
    this.fetchReports();
  }

  fetchReports(): void {
    this.reportService.getReports().subscribe(data => this.reports = data);
  }

  deleteReport(id: number): void {
    if(confirm('Are you sure you want to delete this report?')) {
      this.reportService.deleteReport(id).subscribe({
        next: () => {
          alert('Report deleted successfully.');
          this.fetchReports();
        },
        error: (err) => {
          alert('Delete failed: ' + err.error);
        }
      });
    }
  }

  getMediaUrl(mediaId: number): string {
  return `http://localhost:8092/support-recovery/reports/media/${mediaId}`;
}

isImage(fileType: string): boolean {
  return fileType.startsWith('image/');
}




}
