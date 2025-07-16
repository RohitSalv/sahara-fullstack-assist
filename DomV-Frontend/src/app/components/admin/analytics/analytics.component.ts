import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit{
totalUsers = 0;
  totalReports = 0;
  totalStories = 0;
  totalHelplines = 0;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadAnalytics();
  }

  loadAnalytics() {
    this.dashboardService.getDashboardStats().subscribe(data => {
      this.totalUsers = data.totalUsers;
      this.totalReports = data.totalReports;
      this.totalStories = data.totalStories;
      this.totalHelplines = data.totalHelplines;
    });
  }

}
