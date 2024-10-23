import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactusComponent } from '../components/contactus/contactus.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'login', component: LoginComponent},
    { path: 'contact', component: ContactusComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', redirectTo: '/home' } // Catch-all route for non-existing routes
];
