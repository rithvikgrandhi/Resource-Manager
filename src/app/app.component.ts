import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactusComponent } from "../components/contactus/contactus.component";
import { LoginComponent } from "../components/login/login.component";
import { RegisterComponent } from "../components/register/register.component";
import { AboutComponent } from "../components/about/about.component";
import { HomeComponent } from "../components/home/home.component";
import { DirectorComponent } from "../components/director/director.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HrportalComponent } from "../components/hrportal/hrportal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ContactusComponent, LoginComponent, DirectorComponent, RegisterComponent, AboutComponent, HomeComponent, RouterModule, DirectorComponent, HrportalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproject';
}
