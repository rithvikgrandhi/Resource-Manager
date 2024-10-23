import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-application-dashboard',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './application-dashboard.component.html',
  styleUrl: './application-dashboard.component.css',
})
export class ApplicationDashboardComponent {
  applicants = [
    {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      status: 'Under Review',
    },
    {
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '234-567-8901',
      status: 'Interview Scheduled',
    },
    {
      fullName: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      phone: '345-678-9012',
      status: 'Rejected',
    },
    {
      fullName: 'Emily Davis',
      email: 'emily.davis@example.com',
      phone: '456-789-0123',
      status: 'Hired',
    },
  ];
}
