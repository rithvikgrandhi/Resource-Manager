import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobPost } from '../list-job-posts/list-job-posts.component';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Application } from '../application/application.component';
import { UserApplication } from '../applicant-applications/applicant-applications.component';
import { ApplicationHR } from '../application-dashboard/application-dashboard.component';
import { CertificationRequest } from '../employee-certification-dashboard/employee-certification-dashboard.component';

export interface User {
  userId: number;
  username: string;
  passwordHash: string;
  role: 'HR' | 'Employee' | 'Director' | 'Applicant';
  fullName: string;
  email: string;
  phoneNumber?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {}

  getUserById(userId: number): Observable<User> {
    const url = `https://localhost:7188/api/Users/${userId}`;
    return this.http.get<User>(url).pipe(catchError(this.handleError));
  }
  getCertificationsByUserId(userId:number): Observable<CertificationRequest[]>{
    const url = `https://localhost:7188/api/Certifications/Employee/${userId}`
    return this.http.get<CertificationRequest[]>(url).pipe(catchError(this.handleError))
  }

  registerUser(user: any) {
    const url = `https:localhost:7188/api/Users`;
    return this.http.post(url, user).subscribe(
      (response) => console.log('Registration successfull', response),
      (error) => console.log(error)
    );
  }
  checkCredentials(form: any): Observable<any> {
    const url = 'https://localhost:7188/api/Users/login';
    return this.http.post(url, form).pipe(catchError(this.handleError));
  }

  login() {
    this.loggedIn.next(true);
  }

  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    this.loggedIn.next(false);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userId');
  }

  getApplicationsByUserId(userId: number): Observable<UserApplication[]> {
    const url = `https://localhost:7188/api/Applications/user/${userId}`;
    return this.http
      .get<UserApplication[]>(url)
      .pipe(catchError(this.handleError));
  }

  getAllJobPosts(): Observable<JobPost[]> {
    const url = 'https://localhost:7188/api/JobPosts';
    return this.http.get<JobPost[]>(url).pipe(catchError(this.handleError));
  }

  getRole(): Observable<string | null> {
    return new Observable((observer) => {
      const role = localStorage.getItem('userRole');
      observer.next(role);
      observer.complete();
    });
  }

  getApplicationsByJobPostId(jobPostId: number): Observable<ApplicationHR[]> {
    const url = `https://localhost:7188/api/Applications/post/${jobPostId}`;
    return this.http
      .get<ApplicationHR[]>(url)
      .pipe(catchError(this.handleError));
  }

  submitApplication(application: Application): void {
    const url = 'https://localhost:7188/api/Applications';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post(url, application, { headers })
      .pipe(catchError(this.handleError))
      .subscribe(
        (response) =>
          console.log('Application submitted successfully', response),
        (error) => console.error('Error submitting application', error)
      );
  }

  updateApplicationStatus(application: ApplicationHR): void {
    const updatedApplication: Application = {
      applicationId: application.applicationId,
      userId: application.userId,
      jobPostId: application.jobPostId,
      status: application.status,
      skills: application.skills,
      applicationDate: application.applicationDate,
      coverLetter: application.coverLetter,
      lastUpdated: new Date(),
    };

    const url = `https://localhost:7188/api/Applications/${application.applicationId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .put(url, updatedApplication, { headers })
      .pipe(catchError(this.handleError))
      .subscribe(
        (response) => console.log(response),
        (error) => console.error(error)
      );
  }

  postJobPosts(form: any): void {
    const url = 'https://localhost:7188/api/JobPosts';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post(url, form, { headers })
      .pipe(catchError(this.handleError))
      .subscribe(
        (response) => console.log('Job post submitted successfully', response),
        (error) => console.error('Error submitting job post', error)
      );

    console.log(form); // For debugging
  }

  getJobPostById(id: number): Observable<JobPost> {
    const url = `https://localhost:7188/api/JobPosts/${id}`;
    return this.http.get<JobPost>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('API error:', error);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
