import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ContactusComponent } from '../components/contactus/contactus.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { DirectorComponent } from '../components/director/director.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HrportalComponent } from '../components/hrportal/hrportal.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable, map } from 'rxjs';
import { ApiCallService } from '../components/services/api-call.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    NgIf,
    ContactusComponent,
    LoginComponent,
    DirectorComponent,
    RegisterComponent,
    AboutComponent,
    HomeComponent,
    RouterModule,
    DirectorComponent,
    HrportalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TalentSphere';
  isLoggedIn$: Observable<boolean>;
  userRole$: Observable<string | null>;

 
  logout() {
    this.apiCallService.logout();
    this.router.navigateByUrl('/home');
  }

  hasRole(role: string): Observable<boolean> {
    return this.userRole$.pipe(map((userRole) => userRole === role));
  }

  hasAnyRole(roles: string[]): Observable<boolean> {
    return this.userRole$.pipe(
      map((userRole) => userRole !== null && roles.includes(userRole))
    );
  }

  constructor(private apiCallService: ApiCallService, private router: Router) {
    this.isLoggedIn$ = this.apiCallService.isLoggedIn$;
    this.userRole$ = this.apiCallService.getRole(); // Observable for user role
  }
}
