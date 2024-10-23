import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-employee-certification-dashboard',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe],
  templateUrl: './employee-certification-dashboard.component.html',
  styleUrl: './employee-certification-dashboard.component.css',
})
export class EmployeeCertificationDashboardComponent {
  certificationRequests = [
    {
      certificationName: 'Project Management Professional (PMP)',
      justification: 'To enhance project management skills.',
      status: 'Approved',
      requestedDate: new Date('2024-01-15'),
    },
    {
      certificationName: 'Certified ScrumMaster (CSM)',
      justification: 'To improve agile project management capabilities.',
      status: 'Pending',
      requestedDate: new Date('2024-02-20'),
    },
    {
      certificationName: 'AWS Certified Solutions Architect',
      justification: 'To gain expertise in cloud architecture.',
      status: 'Rejected',
      requestedDate: new Date('2024-03-05'),
    },
  ];
}
