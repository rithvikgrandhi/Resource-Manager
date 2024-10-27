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

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'director', component: DirectorComponent },
  { path: 'hrportal', component: HrportalComponent },

  { path: 'application', component: ApplicationComponent },
  { path: 'request-certification', component: CertificationRequestComponent },
  {
    path: 'mycertifications',
    component: EmployeeCertificationDashboardComponent,
  },
  { path: 'certifications', component: CertificationDashboardComponent },
  {
    path: 'application-dashboard/:id',
    component: ApplicationDashboardComponent,
  },
  { path: 'create-job-post', component: CreateJobPostComponent },
  { path: 'list-jobposts', component: ListJobPostsComponent },
  { path: 'job-posts/:id', component: JobPostDetailsComponent }, // Job post details
  { path: 'myapplications/:id', component: ApplicantApplicationsComponent },

  { path: 'application/:id', component: ApplicationComponent },
  { path: 'projects', component: ProjectsComponent },


  { path: '**', redirectTo: '/home' }, // Catch-all route for non-existing routes
];
