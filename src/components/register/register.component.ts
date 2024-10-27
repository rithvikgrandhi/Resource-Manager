import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf, NgClass],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model: any = {
    username: '',
    passwordHash: '',
    role: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    confirmPassword: ''
  };
  formSubmitted: boolean = false;
  showPasswordRules: boolean = false;
  passwordLengthValid: boolean = false;
  passwordHasNumber: boolean = false;
  passwordHasSpecialChar: boolean = false;
  passwordHasUppercase: boolean = false;
  passwordHasLowercase: boolean = false;
  registrationMessage: string = '';

  constructor(private router: Router, private apiCallService:ApiCallService) {}

  checkPassword() {
    this.passwordLengthValid = this.model.passwordHash.length >= 8;
    this.passwordHasNumber = /\d/.test(this.model.passwordHash);
    this.passwordHasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(this.model.passwordHash);
    this.passwordHasUppercase = /[A-Z]/.test(this.model.passwordHash);
    this.passwordHasLowercase = /[a-z]/.test(this.model.passwordHash);
  }

  onSubmit() {
    this.formSubmitted = true; // Track submission state
    console.log(this.model);

    // Check if form is valid
    if (this.isFormValid()) {
      // Check if passwords match
      if (this.model.passwordHash === this.model.confirmPassword) {
        
        this.registrationMessage = 'Registration successful!';
        
        // Destructure to remove confirmPassword and log the result
        const { confirmPassword, ...modelWithoutConfirmPassword } = this.model;
        
        console.log(modelWithoutConfirmPassword);
        
        this.apiCallService.registerUser(this.model)
        // Optionally navigate to the login page
        // this.router.navigate(['/login']);
      } else {
        this.registrationMessage = 'Passwords do not match.';
      }
    } else {
      this.registrationMessage = 'Please fill in all required fields.';
    }
  }

  isFormValid() {
    return Object.values(this.model).every(x => x !== '');
  }
}
