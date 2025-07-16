import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ResourcesComponent } from './components/pages/resources/resources.component';
import { ReportingComponent } from './components/pages/reporting/reporting.component';
import { EducationComponent } from './components/pages/education/education.component';
import { SupportComponent } from './components/pages/support/support.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterUserComponent } from './components/auth/register-user/register-user.component';
import { UserServicesComponent } from './components/pages/user-services/user-services.component';
import { AdminServicesComponent } from './components/pages/admin-services/admin-services.component';
import { CatogoriesComponent } from './components/pages/catogories/catogories.component';
import { SubcatogoriesComponent } from './components/pages/subcatogories/subcatogories.component';
import { ResourceComponent } from './components/pages/resource/resource.component';
import { HelplinesComponent } from './components/support-recovery/helplines/helplines.component';
import { SupportGroupsComponent } from './components/support-recovery/support-groups/support-groups.component';
import { RecoveryToolsComponent } from './components/support-recovery/recovery-tools/recovery-tools.component';
import { ChatbotComponent } from './components/chatbot/chatbot/chatbot.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ManageCategoriesComponent } from './components/admin/manage-categories/manage-categories.component';
import { ManageUsersComponent } from './components/admin/manage-users/manage-users.component';
import { ManagHelplinesComponent } from './components/admin/manag-helplines/manag-helplines.component';
import { ManageIncidentReportsComponent } from './components/admin/manage-incident-reports/manage-incident-reports.component';
import { ManageSuccessStoriesComponentComponent } from './components/admin/manage-success-stories-component/manage-success-stories-component.component';
import { AddSuccessStoryComponent } from './components/user/add-success-story/add-success-story.component';
import { AnalyticsComponent } from './components/admin/analytics/analytics.component';
import { UserSuccessStoriesComponent } from './components/user/user-success-stories/user-success-stories.component';
import { ManagesubcategoriesComponent } from './components/admin/managesubcategories/managesubcategories.component';
import { ManageresourceComponent } from './components/admin/manageresource/manageresource.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'resources',
    component:ResourcesComponent
  },
  {
    path:'report',
    component:ReportingComponent
  },
  {
    path:'education',
    component:EducationComponent
  },
  {
    path:'support',
    component:SupportComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register-user',
    component:RegisterUserComponent
  },
  {
    path:'user-services',
    component:UserServicesComponent,
    canActivate: [AuthGuard], data: { role: 'USER' } 
  },
  {
    path:'admin-services',
    component:AdminServicesComponent,
    canActivate: [AuthGuard], data: { role: 'ADMIN' }
  },
  { path: 'categories', component: CatogoriesComponent },
  { path: 'categories/:id/subcategories', component: SubcatogoriesComponent },
  { path: 'subcategories/:id/resources', component: ResourceComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'helplines', component: HelplinesComponent },
  { path: 'support-groups', component: SupportGroupsComponent },
  { path: 'recovery-tools', component: RecoveryToolsComponent },
  { path:'chatbot', component: ChatbotComponent},
  {path:'profile', component:ProfileComponent,canActivate: [AuthGuard]},
  { path: 'admin/manage-categories', component: ManageCategoriesComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/manage-subcategories', component: ManagesubcategoriesComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/manage-users', component: ManageUsersComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/manage-helplines', component: ManagHelplinesComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/manage-reports', component: ManageIncidentReportsComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/manage-success-stories', component: ManageSuccessStoriesComponentComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/admin-dashboard', component: AnalyticsComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'add-success-story', component: AddSuccessStoryComponent, canActivate: [AuthGuard], data: { role: 'USER' } },
  { path: 'view-success-story', component: UserSuccessStoriesComponent },
  { path: 'manage-resource', component: ManageresourceComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
