import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Use "styleUrls" instead of "styleUrl"
})
export class LoginComponent {
  model = {
    userName: '',
    password: '',
  };

  loginMessage: string | null = null;
  isSuccess: boolean | null = null; // Initialize as neutral

  constructor(private router: Router, private apiCallService:ApiCallService) {}

  onSubmit() {
    
      console.log(this.model);
      this.apiCallService.checkCredentials(this.model).subscribe(
        (response) => {
          console.log(response)
          localStorage.setItem('userId', response.userId); // Store token in local storage
          localStorage.setItem('userRole', response.role)
          localStorage.setItem('userName', response.fullName);
          this.apiCallService.login()
          this.router.navigate(['/home']); // Navigate to a protected route
        },
        (error) => {
          alert('Invalid credentials');
        }
      );
    
    }
}
