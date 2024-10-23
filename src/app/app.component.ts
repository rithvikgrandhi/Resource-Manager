import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactusComponent } from "../components/contactus/contactus.component";
import { LoginComponent } from "../components/login/login.component";
import { RegisterComponent } from "../components/register/register.component";
import { AboutComponent } from "../components/about/about.component";
import { HomeComponent } from "../components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactusComponent, LoginComponent, RegisterComponent, AboutComponent, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproject';
}
