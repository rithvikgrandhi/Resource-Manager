import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactusComponent } from '../components/contactus/contactus.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { DirectorComponent } from '../components/director/director.component';
import { HrportalComponent } from '../components/hrportal/hrportal.component';
import { ApplicationComponent } from '../components/application/application.component';
import { CertificationRequestComponent } from '../components/certification-request/certification-request.component';
import { EmployeeCertificationDashboardComponent } from '../components/employee-certification-dashboard/employee-certification-dashboard.component';
import { CertificationDashboardComponent } from '../components/certification-dashboard/certification-dashboard.component';
import { CreateJobPostComponent } from '../components/create-job-post/create-job-post.component';
import { ListJobPostsComponent } from '../components/list-job-posts/list-job-posts.component';
import { JobPostDetailsComponent } from '../components/job-post-details/job-post-details.component';
import { ApplicationDashboardComponent } from '../components/application-dashboard/application-dashboard.component';
import { ApplicantApplicationsComponent } from '../components/applicant-applications/applicant-applications.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { AuthGuard } from '../components/auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'director', component: DirectorComponent, canActivate: [AuthGuard], data: { role: 'Director' } },
  { path: 'hrportal', component: HrportalComponent, canActivate: [AuthGuard], data: { role: 'HR' } },
  // { path: 'application', component: ApplicationComponent, canActivate: [AuthGuard], data: { role: 'Applicant' } },
  { path: 'request-certification', component: CertificationRequestComponent, canActivate: [AuthGuard], data: { role: 'Employee' } },
  { path: 'mycertifications', component: EmployeeCertificationDashboardComponent, canActivate: [AuthGuard], data: { role: 'Employee' } },
  { path: 'certifications', component: CertificationDashboardComponent, canActivate: [AuthGuard], data: { role: 'HR' } },
  { path: 'application-dashboard/:id', component: ApplicationDashboardComponent, canActivate: [AuthGuard], data: { role: 'HR' } },
  { path: 'create-job-post', component: CreateJobPostComponent, canActivate: [AuthGuard], data: { role: 'HR' } },
  { path: 'list-jobposts', component: ListJobPostsComponent, canActivate: [AuthGuard], data: { role: ['Applicant', 'HR'] } },
  { path: 'job-posts/:id', component: JobPostDetailsComponent, canActivate: [AuthGuard], data: { role: ['Applicant', 'HR'] } },
  { path: 'myapplications/:id', component: ApplicantApplicationsComponent, canActivate: [AuthGuard], data: { role: 'Applicant' } },
  { path: 'application/:jobPostId', component: ApplicationComponent, canActivate: [AuthGuard], data: { role: 'Applicant' } },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard], data: { role: 'Director' } },
  { path: '**', redirectTo: '/home' },
];
