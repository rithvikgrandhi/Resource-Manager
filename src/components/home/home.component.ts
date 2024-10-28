import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  username!:string;

  isLoggedIn$: Observable<boolean>;

  constructor(private apiService:ApiCallService){this.isLoggedIn$ = apiService.isLoggedIn$}
  ngOnInit(){
    this.username = this.apiService.getUsername();

  }
}
