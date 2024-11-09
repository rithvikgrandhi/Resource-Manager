import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';
import { JobPost } from '../list-job-posts/list-job-posts.component';

@Component({
  selector: 'app-create-job-post',
  standalone: true,
  imports: [NgFor, NgIf,FormsModule],
  templateUrl: './create-job-post.component.html',
  styleUrl: './create-job-post.component.css',
})
export class CreateJobPostComponent {
  jobPost: JobPost = {
    jobPostId: 0, // Set to a default or auto-generated value
    title: '',
    description: '',
    skillsRequired: '',
    numberOfPeopleRequired: 0,
    postedDate: new Date(), // Initialize with current date
    status: 'Open',
  };
  constructor(private router: Router, private apiCallService:ApiCallService) {}

  onSubmit() {
    this.jobPost.postedDate = new Date();
    // Logic to save the job post
    console.log('Job Post Created:', this.jobPost);

    this.apiCallService.postJobPosts(this.jobPost);

    // After submission, redirect or show a success message
    this.router.navigate(['/list-jobposts']);
  }
}
