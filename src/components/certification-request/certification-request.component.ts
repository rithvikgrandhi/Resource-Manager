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
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-certification-request',
  standalone: true,
  imports: [FormsModule, MatCardModule,NgIf, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './certification-request.component.html',
  styleUrls: ['./certification-request.component.css']
})
export class CertificationRequestComponent {
  model: any = {
    userId: localStorage.getItem('user_id'),
    certificationDate: new Date(),
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
  http:HttpClient;

  constructor(restDataref:certificationService,private router: Router, _http: HttpClient) {
    this.restData = restDataref;
    this.http = _http;
  }

  onSubmit() {
    this.formSubmitted = true; // Track submission state
  
    // if (this.isFormValid()) {
      // Call the backend service to post the data
      this.model['userId'] = parseInt(localStorage.getItem('user_id')??'0');
      console.log("check1",this.model)
      this.http.post("https://localhost:7188/api/Certifications", this.model).subscribe(data =>{
        console.log(data);
      });
    }
  //   {
  //     "certificationId": 1,
  //     "userId": 1,
  //     "certificationName": "AWS Certified Solutions Architect",
  //     "certificationDate": "2023-05-10T00:00:00",
  //     "justification": "Required for cloud migration project",
  //     "status": "Approved",
  //     "user": null
  //   },
  //   {
  //     "certificationName": "jhbjh",
  //     "justification": "hjb",
  //     "userId": 1
  // }
    //   this.certificationService.postCertification(this.model).subscribe({
    //     next: (response:Certifications) => {
    //       console.log("submitted")
    //       this.requestMessage = 'Certification request submitted successfully!';
    //       this.router.navigate(['/certifications-dashboard']); // Navigate to dashboard or success page
    //     },
    //     error: (error:any) => {
    //       this.requestMessage = 'Failed to submit request. Please try again.';
    //       console.error('Error:', error);
    //     },
    //   });
    // } else {
    //   this.requestMessage = 'Please fill in all required fields.';
    // }
  //}

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
