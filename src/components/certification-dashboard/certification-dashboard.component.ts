import { Component,OnInit} from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

import { certificationService } from '../../services/certification.service';

export interface Certifications {
  fullName: string,
  email: string,
  phoneNumber:string,
  certificationId: number,
  certificationDate: Date,
  certificationName: string,
  justification: string,
  status: boolean
}

@Component({
  selector: 'app-certification-dashboard',
  imports: [NgIf, NgForOf],
  standalone: true,
  templateUrl: './certification-dashboard.component.html',
  styleUrl: './certification-dashboard.component.css'
})

export class CertificationDashboardComponent implements OnInit {
  certificationRequests: Certifications[] = [];
  restUserData: certificationService;

  constructor(private _certifications: certificationService) {
    this.restUserData = _certifications;
  }

  ngOnInit(): void {
    this.loadCertificationRequests();
  }

  loadCertificationRequests(): void {
    this._certifications.getCertificationDetails().subscribe((data) => {
      this.certificationRequests = data;
      console.log(this.certificationRequests);
    });
  }

  approveRequest(request: Certifications): void {
    request.status = true; // Optimistic UI Update
    this._certifications.updateCertificationStatus(request.certificationId, true).subscribe(
      () => console.log('Request approved successfully.'),
      (error) => console.error('Error approving request:', error)
    );
  }

  rejectRequest(request: Certifications): void {
    request.status = false; // Optimistic UI Update
    this._certifications.updateCertificationStatus(request.certificationId, false).subscribe(
      () => console.log('Request rejected successfully.'),
      (error) => console.error('Error rejecting request:', error)
    );
  }

  getStatusClass(status: boolean | null): string {
    if (status === true) return 'status-approved';
    if (status === false) return 'status-rejected';
    return 'status-pending'; // Assuming a CSS class for pending status
  }

  getStatusText(status: boolean | null): string {
    if (status === true) return 'Approved';
    if (status === false) return 'Rejected';
    return 'Pending'; // Assuming a text for pending status
  }
}
