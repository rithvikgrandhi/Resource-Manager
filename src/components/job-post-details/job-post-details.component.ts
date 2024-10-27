import { Component } from '@angular/core';
import { JobPost } from '../list-job-posts/list-job-posts.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-job-post-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './job-post-details.component.html',
  styleUrl: './job-post-details.component.css'
})
export class JobPostDetailsComponent {
  jobPost!:JobPost;
  constructor(private route: ActivatedRoute, private apiService: ApiCallService, private router: Router) {}

  ngOnInit(): void {
    const jobPostId = +this.route.snapshot.paramMap.get('id')!; // Get the job ID from the route

    this.apiService.getJobPostById(jobPostId).subscribe(
      (data: JobPost) => {
        this.jobPost = data;
      },
      (error) => {
        console.error('Error fetching job post details:', error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/list-jobposts']); // Navigate back to job postings
  }
  applyForJob() {
    // Navigate to the job application form page
    this.router.navigate(['/application', this.jobPost.jobPostId]);
  }
}
