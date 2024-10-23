import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,NgIf,CurrencyPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  model = {
    income: null,
    deductions: null
  };
  
  tax: number | null = null;

  onCalculate() {
    if (this.model.income && this.model.deductions) {
      const taxableIncome = this.model.income - this.model.deductions;
      this.tax = this.calculateTax(taxableIncome);
    }
  }

  private calculateTax(income: number): number {
    // Simple tax calculation logic (for example purposes)
    if (income <= 250000) return 0;
    if (income <= 500000) return (income - 250000) * 0.05; // 5% tax
    if (income <= 1000000) return (income - 500000) * 0.1 + 12500; // 10% tax
    return (income - 1000000) * 0.3 + 62500; // 30% tax
  }
}
