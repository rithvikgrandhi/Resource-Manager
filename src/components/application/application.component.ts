import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';

import { JobPost } from '../list-job-posts/list-job-posts.component';
import { ApiCallService } from '../services/api-call.service';

export interface Application {
  applicationId: number
  userId: number;
  jobPostId: number;
  skills: string;
  status: string;
  applicationDate: Date;
  lastUpdated: Date;
  coverLetter: string;
}

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
  ],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {
  model: any = {
    userId: localStorage.getItem('userId'), // Assume a logged-in user with id 1 for now
    jobPostId: 0,
    skills: '',
    status: 'Applied',
    applicationDate: new Date(),
    lastUpdated: new Date(),
    coverLetter: '',
  };

  jobPostId!: number;
  jobpost!: JobPost; // Ensure jobpost is initialized

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiCallService
  ) {}

  /**
   * Lifecycle hook to get the job ID from the route and populate the
   * form with the job title and skills required for the job.
   */
  ngOnInit(): void {
    this.jobPostId = +this.route.snapshot.paramMap.get('id')!;
    
    // Fetch job post details by jobPostId
    this.apiService.getJobPostById(this.jobPostId).subscribe(
      (data: JobPost) => {
        console.log(data);
        this.jobpost = data; // Set jobpost data
        this.model.jobPostId = this.jobPostId; // Set job_post_id for submission
      },
      (error) => {
        console.error('Error fetching job post details:', error);
      }
    );
  }

  /**
   * Handles form submission
   */
  onSubmit() {
    // Update model with current time
    this.model.lastUpdated = new Date();

    // Call API service to submit the form data
    this.apiService.submitApplication(this.model)
  }
}
