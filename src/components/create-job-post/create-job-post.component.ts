import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job-post',
  standalone: true,
  imports: [NgFor, NgIf,FormsModule],
  templateUrl: './create-job-post.component.html',
  styleUrl: './create-job-post.component.css',
})
export class CreateJobPostComponent {
  jobPost = {
    title: '',
    description: '',
    skillsRequired: '',
    numberOfPeopleRequired: 0,
    postedDate: new Date(),
    status: 'Open', // Default status
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Logic to save the job post
    console.log('Job Post Created:', this.jobPost);

    

    // After submission, redirect or show a success message
    this.router.navigate(['/job-posts']);
  }
}
