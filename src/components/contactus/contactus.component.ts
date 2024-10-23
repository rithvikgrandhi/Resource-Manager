import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule, NgIf],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  model = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit() {
    if (this.model.name && this.model.email && this.model.phone) {
      // Handle form submission logic here (e.g., send data to a server)
      console.log('Form Submitted:', this.model);
      // Reset the form
      this.model = { name: '', email: '', phone: '' };
    }
  }
}
