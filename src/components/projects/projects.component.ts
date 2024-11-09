import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Project {
  projectId: number;
  directorId: number;
  members: string; // Assuming this is a comma-separated string
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [
    { id: '1', name: 'Phoenix' },
    { id: '2', name: 'Orion' },
    { id: '3', name: 'Atlas' },
    { id: '4', name: 'Nimbus' },
    { id: '5', name: 'Aurora' },
    { id: '6', name: 'Titan' },
    { id: '7', name: 'Echo' },
    { id: '8', name: 'Quasar' },
    { id: '9', name: 'Odyssey' },
    { id: '10', name: 'Legacy' },
];
  deets: Project[] = [];
  directorNames: { [key: number]: string } = {}; // Dictionary to store director names

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProjects();  
  }

  getProjects() {
    this.http.get<Project[]>("https://talentsphere.azurewebsites.net/api/ProjectDeets").subscribe((data) => {
      this.deets = data;
      this.deets.forEach(project => {
        this.fetchDirectorName(project.directorId); // Fetch director name for each project
      });
    });
  }

  private fetchDirectorName(id: number) {
    if (this.directorNames[id]) {
      return; // If the name is already fetched, do nothing
    }

    this.http.get<any>(`https://talentsphere.azurewebsites.net/api/Users/${id}`).subscribe(
      (response) => {
        this.directorNames[id] = response.fullName; // Store the director's full name
      },
      error => {
        console.error('Error fetching director name:', error);
      }
    );
  }
}
