import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { ActivatedRoute } from '@angular/router';

export interface UserApplication {
  userId: number;
  jobTitle: string;
  skills: string;
  status: string;
  applicationDate: Date;
  lastUpdated: Date;
  coverLetter: string;
}


@Component({
  selector: 'app-applicant-applications',
  standalone: true,
  imports: [NgIf, DatePipe, NgFor],
  templateUrl: './applicant-applications.component.html',
  styleUrl: './applicant-applications.component.css',
})
export class ApplicantApplicationsComponent implements OnInit {
  applications: UserApplication[] = [];
  userId!:number
  constructor(private apiService: ApiCallService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchApplications();
    this.userId = +this.route.snapshot.paramMap.get('id')!;
  }

  fetchApplications() {
    this.apiService.getApplicationsByUserId(this.userId).subscribe(
      (data: UserApplication[]) => {
        this.applications = data;
        console.log(this.applications)
      },
      (error) => {
        console.error('Error fetching applications:', error);
      }
    );
  }
}
