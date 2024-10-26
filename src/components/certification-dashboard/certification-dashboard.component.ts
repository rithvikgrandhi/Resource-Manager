import { Component,OnInit} from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

import { certificationService } from '../../services/certification.service';

export interface Certifications {
  username:string,
  fullName: string,
  email: string,
  phoneNumber:string,
  certificationId: number,
  certificationDate: Date,
  certificationName: string,
  justification: string,
  status: string
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
restUserData : certificationService
  constructor(private _certifications: certificationService) {

    this.restUserData=_certifications;

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
    request.status = 'Approved'; // Optimistic UI Update
    this._certifications.updateCertificationStatus(request.certificationId, 'Approved').subscribe(
      () => console.log('Request approved successfully.'),
      (error) => console.error('Error approving request:', error)
    );
  }

  rejectRequest(request: Certifications): void {
    request.status = 'Rejected'; // Optimistic UI Update
    this._certifications.updateCertificationStatus(request.certificationId, 'Rejected').subscribe(
      () => console.log('Request rejected successfully.'),
      (error) => console.error('Error rejecting request:', error)
    );
  }
  
  getStatusClass(status: string): string {
    return status === 'Approved' ? 'status-approved' : status === 'Rejected' ? 'status-rejected' : '';
  }
}
