import { DatePipe, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { Router } from '@angular/router';

export interface JobPost {
  jobPostId: number;
  title: string;
  description: string;
  skillsRequired: string;
  numberOfPeopleRequired: number;
  postedDate: Date;
  status: string;
}

@Component({
  selector: 'app-list-job-posts',
  standalone: true,
  imports: [DatePipe, NgForOf],
  templateUrl: './list-job-posts.component.html',
  styleUrl: './list-job-posts.component.css',
})
export class ListJobPostsComponent implements OnInit {
  /* jobPosts = [
    {
      jobPostId: 1,
      title: 'Frontend Developer',
      description:
        'Looking for a skilled Frontend Developer with experience in Angular.',
      skillsRequired: 'Angular, TypeScript, CSS',
      numberOfPeopleRequired: 2,
      postedDate: new Date(),
      status: 'Open',
    },
    {
      jobPostId: 2,
      title: 'Backend Developer',
      description:
        'Seeking a Backend Developer with expertise in Node.js and Express.',
      skillsRequired: 'Node.js, Express, MongoDB',
      numberOfPeopleRequired: 1,
      postedDate: new Date(),
      status: 'Open',
    },
    {
      jobPostId: 3,
      title: 'UI/UX Designer',
      description:
        'Join our team as a UI/UX Designer to create amazing user experiences.',
      skillsRequired: 'Figma, Sketch, Adobe XD',
      numberOfPeopleRequired: 1,
      postedDate: new Date(),
      status: 'Closed',
    },
  ]; */

  JobPosts: JobPost[] = [];
  ngOnInit():void {
    this.apiService.getAllJobPosts().subscribe(
      (data: JobPost[]) => {
        this.JobPosts = data; // Assign the data to the jobPosts array
        console.log('Job posts fetched:', this.JobPosts);
      },
      (error) => {
        console.error('Error fetching job posts:', error);
      }
    );
  };

  viewJobDetails(jobPostId: number): void {
    this.router.navigate(['/job-posts', jobPostId]);
  }

  viewApplicants(jobPostId: number): void{
    this.router.navigate(['/application-dashboard', jobPostId])
  }
  constructor(private apiService: ApiCallService, private router:Router) {}
}
