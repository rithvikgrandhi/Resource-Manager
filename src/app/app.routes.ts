import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactusComponent } from '../components/contactus/contactus.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ApplicationComponent } from '../components/application/application.component';
import { CertificationRequestComponent } from '../components/certification-request/certification-request.component';
import { CertificationDashboardComponent } from '../components/certification-dashboard/certification-dashboard.component';
import { EmployeeCertificationDashboardComponent } from '../components/employee-certification-dashboard/employee-certification-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'application', component: ApplicationComponent },
  {path:'request-certification', component: CertificationRequestComponent},
  {path: 'mycertifications', component:EmployeeCertificationDashboardComponent},
  {path: 'certifications', component:CertificationDashboardComponent},

  { path: '**', redirectTo: '/home' }, // Catch-all route for non-existing routes
];
