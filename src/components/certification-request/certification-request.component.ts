import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { certificationService } from '../../services/certification.service';
import { Certifications } from '../certification-dashboard/certification-dashboard.component';

@Component({
  selector: 'app-certification-request',
  standalone: true,
  imports: [FormsModule, MatCardModule,NgIf, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './certification-request.component.html',
  styleUrls: ['./certification-request.component.css']
})
export class CertificationRequestComponent {
  model: any = {
    fullName: '',
    email: '',
    certificationName: '',
    justification: ''
  };
  formSubmitted: boolean = false;
  requestMessage: string = '';
  certificationService: any;
  certificationForm: any;
  user_id: string = '';
  certification_name: string='';
  certification_date: string='';
  justification: string='';

  restData:certificationService;

  constructor(restDataref:certificationService,private router: Router) {
    this.restData = restDataref;
  }

  onSubmit() {
    this.formSubmitted = true; // Track submission state
  
    if (this.isFormValid()) {
      // Call the backend service to post the data
      this.certificationService.postCertification(this.model).subscribe({
        next: (response:Certifications) => {
          this.requestMessage = 'Certification request submitted successfully!';
          this.router.navigate(['/certifications-dashboard']); // Navigate to dashboard or success page
        },
        error: (error:any) => {
          this.requestMessage = 'Failed to submit request. Please try again.';
          console.error('Error:', error);
        },
      });
    } else {
      this.requestMessage = 'Please fill in all required fields.';
    }
  }

  isFormValid() {
    return Object.values(this.model).every(x => x !== '');
  }

  postCertification() {
    this.formSubmitted = true;
    if (this.certificationForm.valid) {
      console.log('Form Submitted:', this.certificationForm.value);
      this.certificationService.submit(this.certificationForm.value).subscribe()
    } else {
      console.log('Form is invalid');
    }
  }
}
