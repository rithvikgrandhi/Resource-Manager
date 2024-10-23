import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-applicant-dashboard',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  templateUrl: './applicant-dashboard.component.html',
  styleUrl: './applicant-dashboard.component.css',
})
export class ApplicantDashboardComponent {
  applications = [
    {
      jobTitle: 'Software Developer',
      status: 'Under Review',
      appliedDate: new Date('2024-01-10'),
    },
    {
      jobTitle: 'Project Manager',
      status: 'Interview Scheduled',
      appliedDate: new Date('2024-01-15'),
    },
    {
      jobTitle: 'UI/UX Designer',
      status: 'Rejected',
      appliedDate: new Date('2024-01-20'),
    },
    {
      jobTitle: 'Data Scientist',
      status: 'Hired',
      appliedDate: new Date('2024-01-25'),
    },
  ];

  viewDetails(application: any) {
    // Logic to view application details (could navigate to a details page or open a modal)
    console.log('Viewing details for:', application);
  }
}
