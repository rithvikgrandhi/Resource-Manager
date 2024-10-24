import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';

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

  constructor(private router: Router) {}

  onSubmit() {
    this.formSubmitted = true; // Track submission state

    if (this.isFormValid()) {
      // Handle successful request logic
      this.requestMessage = 'Certification request submitted successfully!';
      this.router.navigate(['/success']); // Navigate to a success page or similar
    } else {
      this.requestMessage = 'Please fill in all required fields.';
    }
  }

  isFormValid() {
    return Object.values(this.model).every(x => x !== '');
  }
}
