import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private http: HttpClient) { }

  deets:any;

  ngOnInit(){
    this.get_pojs();  
  }
  get_pojs(){
  
   this.http.get("https://localhost:7177/api/ProjectDeets").subscribe((data)=>{
    this.deets = data
  });
    console.log(this.deets.value)

}

}
