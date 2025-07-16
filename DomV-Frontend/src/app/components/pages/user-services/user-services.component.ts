import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.component.html',
  styleUrls: ['./user-services.component.css']
})
export class UserServicesComponent {


  constructor(private router: Router) {}

  goToChatbot() {
    this.router.navigate(['/chatbot']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
  goToHelplines() {
this.router.navigate(['/helplines'])
}
goToSupport() {
this.router.navigate(['/support']);
}
goToReport() {
this.router.navigate(['/report']);
}
goToAddStory() {
this.router.navigate(['/add-success-story']);
}
}
