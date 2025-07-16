import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { QuickExistComponent } from './components/quick-exist/quick-exist.component';
import { EducationComponent } from './components/pages/education/education.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ReportingComponent } from './components/pages/reporting/reporting.component';
import { ResourcesComponent } from './components/pages/resources/resources.component';
import { SupportComponent } from './components/pages/support/support.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './components/auth/register-user/register-user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminServicesComponent } from './components/pages/admin-services/admin-services.component';
import { CatogoriesComponent } from './components/pages/catogories/catogories.component';
import { SubcatogoriesComponent } from './components/pages/subcatogories/subcatogories.component';
import { ResourceComponent } from './components/pages/resource/resource.component';
import { SafePipe } from './pipes/safe.pipe';
import { HelplinesComponent } from './components/support-recovery/helplines/helplines.component';
import { SupportGroupsComponent } from './components/support-recovery/support-groups/support-groups.component';
import { RecoveryToolsComponent } from './components/support-recovery/recovery-tools/recovery-tools.component';
import { ChatbotComponent } from './components/chatbot/chatbot/chatbot.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ManageCategoriesComponent } from './components/admin/manage-categories/manage-categories.component';
import { ManageUsersComponent } from './components/admin/manage-users/manage-users.component';
import { ManagHelplinesComponent } from './components/admin/manag-helplines/manag-helplines.component';
import { ManageIncidentReportsComponent } from './components/admin/manage-incident-reports/manage-incident-reports.component';
import { ManageSuccessStoriesComponentComponent } from './components/admin/manage-success-stories-component/manage-success-stories-component.component';
import { UserSuccessStoriesComponent } from './components/user/user-success-stories/user-success-stories.component';
import { AddSuccessStoryComponent } from './components/user/add-success-story/add-success-story.component';
import { AnalyticsComponent } from './components/admin/analytics/analytics.component';
import { ManagesubcategoriesComponent } from './components/admin/managesubcategories/managesubcategories.component';
import { ManageresourceComponent } from './components/admin/manageresource/manageresource.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    QuickExistComponent,
    RegisterUserComponent,
    AdminServicesComponent,
    CatogoriesComponent,
    SubcatogoriesComponent,
    ResourceComponent,
    SafePipe,
    HelplinesComponent,
    SupportGroupsComponent,
    RecoveryToolsComponent,
    ChatbotComponent,
    ProfileComponent,
    ManageCategoriesComponent,
    ManageUsersComponent,
    ManagHelplinesComponent,
    ManageIncidentReportsComponent,
    ManageSuccessStoriesComponentComponent,
    UserSuccessStoriesComponent,
    AddSuccessStoryComponent,
    AnalyticsComponent,
    ManagesubcategoriesComponent,
    ManageresourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FooterComponent,
     HomeComponent,
     ResourcesComponent,
     ReportingComponent,
     EducationComponent,
     SupportComponent,
     CommonModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
