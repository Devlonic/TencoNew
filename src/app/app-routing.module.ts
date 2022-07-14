import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TencoPageAboutComponent } from './pages/ready/tenco-page-about/tenco-page-about.component';
import { TencoPageContactComponent } from './pages/ready/tenco-page-contact/tenco-page-contact.component';
import { TencoPageErrorComponent } from './pages/ready/tenco-page-error/tenco-page-error.component';
import { TencoPageEventsComponent } from './pages/ready/tenco-page-events/tenco-page-events.component';
import { TencoPageHomeComponent } from './pages/ready/tenco-page-home/tenco-page-home.component';
import { TencoPageMembershipComponent } from './pages/ready/tenco-page-membership/tenco-page-membership.component';
import { TencoPagePartnersComponent } from './pages/ready/tenco-page-partners/tenco-page-partners.component';
import { TencoPageServicesComponent } from './pages/ready/tenco-page-services/tenco-page-services.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: TencoPageHomeComponent },
  { path: "about", component: TencoPageAboutComponent },
  { path: "services", component: TencoPageServicesComponent },
  { path: "membership", component: TencoPageMembershipComponent },
  { path: "events", component: TencoPageEventsComponent },
  { path: "partners", component: TencoPagePartnersComponent },
  { path: "contacts", component: TencoPageContactComponent },
  { path: "**", component: TencoPageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
