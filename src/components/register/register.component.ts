import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule, NgIf,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: any = {
      firstName: '',
      lastName: '',
      username: '',
      phone: '',
      email: '',
      password: '',
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

  constructor(private router: Router) {}

  checkPassword() {
      this.passwordLengthValid = this.model.password.length >= 8;
      this.passwordHasNumber = /\d/.test(this.model.password);
      this.passwordHasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(this.model.password);
      this.passwordHasUppercase = /[A-Z]/.test(this.model.password);
      this.passwordHasLowercase = /[a-z]/.test(this.model.password);
  }

  onSubmit() {
      this.formSubmitted = true; // Track submission state

      // Check if form is valid
      if (this.isFormValid()) {
          // Check if passwords match
          if (this.model.password === this.model.confirmPassword) {
              // Handle successful registration logic
              this.registrationMessage = 'Registration successful!';
              this.router.navigate(['/login']);
          }
      } else {
          this.registrationMessage = 'Please fill in all required fields.';
      }
  }

  isFormValid() {
      return Object.values(this.model).every(x => x !== '');
  }
}

