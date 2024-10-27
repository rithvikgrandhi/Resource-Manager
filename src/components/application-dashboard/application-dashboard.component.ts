import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface ApplicationHR {
  applicationId: number;
  userId: number;
  jobPostId: number;
  status: string;
  applicationDate: Date;
  lastUpdated: Date;
  skills: string;
  coverLetter: string;
  fullName: string;
  email: string;
}

@Component({
  selector: 'app-application-dashboard',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, DatePipe],
  templateUrl: './application-dashboard.component.html',
  styleUrl: './application-dashboard.component.css',
})
export class ApplicationDashboardComponent implements OnInit {
  jobPostId!: number;
  constructor(
    private apiCallService: ApiCallService,
    private route: ActivatedRoute
  ) {}
  applications!: ApplicationHR[];

  statusOptions: string[] = [
    'Applied',
    'Under Review',
    'HR Screening',
    'Recruitment Test',
    'Technical Interview',
    'HR Interview',
    'Accepted',
    'Rejected',
  ];

  ngOnInit() {
    this.jobPostId = +this.route.snapshot.paramMap.get('id')!;
    this.apiCallService.getApplicationsByJobPostId(this.jobPostId).subscribe(
      (data) => {
        this.applications = data;
        console.log(this.applications);
      },
      (error) => console.log(error)
    );
  }
  updateStatus(application: ApplicationHR, newStatus: string) {
    console.log(application);
    application.status = newStatus;
    this.apiCallService.updateApplicationStatus(application);
  }
}
