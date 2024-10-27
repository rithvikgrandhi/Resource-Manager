import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

export interface CertificationRequest {
  certificationId: number;
  userId: number;
  certificationName: string;
  certificationDate: string;
  justification: string;
  status: boolean | null; // Status can be null, true, or false
}

@Component({
  selector: 'app-employee-certification-dashboard',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe],
  templateUrl: './employee-certification-dashboard.component.html',
  styleUrls: ['./employee-certification-dashboard.component.css'],
})
export class EmployeeCertificationDashboardComponent implements OnInit {
  certificationRequests: CertificationRequest[] = [];

  constructor(private apiCallService: ApiCallService) {}

  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('userId') ?? '0');
    if (userId > 0) {
      this.apiCallService.getCertificationsByUserId(userId)
        .subscribe(
          (response) => this.certificationRequests = response,
          (error) => console.error("Error fetching certifications:", error)
        );
    } else {
      console.warn("Invalid userId from localStorage.");
    }
  }

  getStatusLabel(status: boolean | null): string {
    if (status === null) {
      return "Pending";
    }
    return status ? "Approved" : "Rejected";
  }
}
