import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-director',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css'] // Fixed spelling here
})
export class DirectorComponent {
  projects: any[] = [
    { id: '1', name: 'Project Alpha' },
    { id: '2', name: 'Project Beta' },
    { id: '3', name: 'Project Gamma' },
  ];

  skills: any[] = [
    { name: 'Frontend' },
    { name: 'Backend' },
    { name: 'Database' },
    { name: 'Full stack' },
    { name: 'Cloud' },
  ];

  selectedSkills: string[] = [];
  selectedProject: string = '';
  submitRequest(formdata:any){
    // console.log(formdata.value)
    localStorage.setItem('projectRequests',JSON.stringify(formdata.value))

  }

  // constructor(private http: HttpClient) {}

  // submitRequest(): void {
  //   const projectId = this.selectedProject;
  //   const skillsRequested = this.skills
  //     .filter(skill => this.selectedSkills.includes(skill.name))
  //     .map(skill => {
  //       const employeeCountInput = document.querySelector(`[name="${skill.name}Count"]`) as HTMLInputElement;
  //       const employeeCount = employeeCountInput ? Number(employeeCountInput.value) : 0;
  //       return {
  //         name: skill.name,
  //         count: employeeCount,
  //       };
  //     });

  //   const requestData = {
  //     projectId,
  //     skills: skillsRequested,
  //   };

  //   // Log the request data
  //   console.log('Submitting request:', requestData);

  //   // Make your API call here to update the database
  //   this.http.post('your-api-endpoint', requestData).subscribe(response => {
  //     console.log('Response from API:', response);
  //     // Handle success response
  //   }, error => {
  //     console.error('Error submitting request:', error);
  //     // Handle error response
  //   });
  // }
}

// If you are using a standalone component, you do not need an additional NgModule




// make a temp table to store data after director req and before hr approval