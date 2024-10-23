import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  model: any = {
    fullName: '',
    email: '',
    phone: '',
    jobPostId: '',
    resume: ''
  };
  formSubmitted: boolean = false;
  applicationMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.formSubmitted = true; // Track submission state

    if (this.isFormValid()) {
      // Handle successful application logic
      this.applicationMessage = 'Application submitted successfully!';
      this.router.navigate(['/success']); // Navigate to a success page or similar
    } else {
      this.applicationMessage = 'Please fill in all required fields.';
    }
  }

  isFormValid() {
    return Object.values(this.model).every(x => x !== '');
  }
}
