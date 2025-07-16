import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.css']
})
export class AdminServicesComponent {


   constructor(private router: Router) {}

  goToManageCategories() {
    this.router.navigate(['/admin/manage-categories']);
  }
  goToManageSubCategories() {
    this.router.navigate(['/admin/manage-subcategories']);
  }

  goToManageUsers() {
    this.router.navigate(['/admin/manage-users']);
  }

  goToApproveReports() {
    this.router.navigate(['/admin/manage-reports']);
  }

  goToManageHelplines() {
    this.router.navigate(['/admin/manage-helplines']);
  }

  goToAnalytics() {
    this.router.navigate(['/admin/admin-dashboard']);
  }

  goToSettings() {
    this.router.navigate(['/admin/settings']);
  }
  goToSuccessStories() {
this.router.navigate(['/admin/manage-success-stories']);
}


}
