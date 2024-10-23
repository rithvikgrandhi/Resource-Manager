import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Use "styleUrls" instead of "styleUrl"
})
export class LoginComponent {
  model = {
    username: '',
    password: ''
  };

  loginMessage: string | null = null;
  isSuccess: boolean | null = null; // Initialize as neutral

  constructor(private router: Router) {}

  onSubmit() {
    const registeredUser = {
      username: 'user',
      password: 'password'
    };
  
    if (this.model.username === registeredUser.username && this.model.password === registeredUser.password) {
      this.loginMessage = 'Login successful!';
      this.isSuccess = true; // Set to true for successful login
      this.router.navigate(['/home']);
    } else {
      this.loginMessage = 'Login failed. Try again.';
      this.isSuccess = false; // Set to false for unsuccessful login
    }
  
    // Optionally clear the message after a few seconds
    setTimeout(() => {
      this.loginMessage = null; 
      this.isSuccess = null; // Reset the state
    }, 3000);
  }
}
