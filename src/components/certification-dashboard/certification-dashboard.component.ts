import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certification-dashboard',
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './certification-dashboard.component.html',
  styleUrl: './certification-dashboard.component.css'
})
export class CertificationDashboardComponent {
  certificationRequests = [
    {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      certificationName: 'Project Management Professional (PMP)',
      justification: 'To enhance project management skills.',
      status: 'Pending'
    },
    {
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      certificationName: 'Certified ScrumMaster (CSM)',
      justification: 'To improve agile project management capabilities.',
      status: 'Approved'
    },
    {
      fullName: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      certificationName: 'AWS Certified Solutions Architect',
      justification: 'To gain expertise in cloud architecture.',
      status: 'Pending'
    }
  ];
  approveRequest(request: any) {
    request.status = 'Approved';
  }

  rejectRequest(request: any) {
    request.status = 'Rejected';
  }
}

