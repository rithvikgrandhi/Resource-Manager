import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Project {
  projectId: number;
  directorId: number;
  members: string; // Assuming this is a comma-separated string
}


@Component({
  selector: 'app-hrportal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hrportal.component.html',
  styleUrls: ['./hrportal.component.css']
})
export class HrportalComponent implements OnInit {
  requests: any[] = []; // Initialize as an array

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getdets(); // Fetch requests on component initialization
  }

  remove_emp(employeeId: number) {
    this.http.delete(`https://localhost:7177/api/AvailableEmps/${employeeId}`).subscribe({
      next: () => {
        console.log(`Successfully removed employee with ID: ${employeeId}`);
      },
      error: err => {
        console.error('Error removing employee:', err);
      }
    });
  }


  disableButtons(reqId: string) {
    const request = this.requests.find(r => r.reqId === reqId);
    if (request) {
      request.disabled = true; // Disable buttons for this request
    }
  }

  approve(reqId: number, project_id: number, dir_id: number) {


    const selectedRequest = this.requests.find(req => req.reqId === reqId);
    if (!selectedRequest) {
      console.error('Request not found');
      return;
    }

    const requirements = JSON.parse(selectedRequest.requirements);

    for (const [skill, count] of Object.entries(requirements)) {
      const countValue = count as number;

      if (countValue > 0) {
        // Fetch available employees for the skill
        this.http.get<any[]>(`https://localhost:7177/api/AvailableEmps/GetBySkill/${skill}`).subscribe({
          next: (employees) => { // TypeScript should infer that employees is any[]
            console.log(employees);

            for (let i = 0; i < countValue && i < employees.length; i++) {
              let employeeId = employees[0]['empId']; // Get the employee ID
              console.log("calling delete", employeeId)
              this.remove_emp(employeeId); // Remove employee by ID
              this.allocate_user(project_id, parseInt(localStorage.getItem('dir_id') ?? '0'), employeeId);

            }
          },
          error: err => {
            console.error('Error fetching available employees:', err);
          }
        });
      }
    }
  }





  allocate_user(req_id: number, director_id: number, user_id: number) {
    // Fetch all project details
    this.http.get<Project[]>(`https://localhost:7177/api/ProjectDeets`).subscribe({
      next: (projects) => {
        // Filter to find the specific project by projectId
        const project = projects.find(p => p.projectId === req_id);

        if (project) {
          // Existing project logic
          let members: string[] = project.members ? project.members.split(',').map(id => id.trim()) : [];

          if (!members.includes(user_id.toString())) {
            members.push(user_id.toString());
          }

          const bod: Project = {
            projectId: project.projectId,
            directorId: director_id,
            members: members.join(', ')
          };

          this.http.put(`https://localhost:7177/api/ProjectDeets/${project.projectId}`, bod).subscribe({
            next: () => {
              console.log(`User ${user_id} allocated to project ${project.projectId}`);
            },
            error: err => {
              console.error('Error allocating user:', err);
            }
          });
        } else {
          // Create a new project if it doesn't exist
          const newProject: Project = {
            projectId: req_id, // Assuming req_id can be used as projectId
            directorId: director_id,
            members: user_id.toString() // Start with the new user as the only member
          };
            console.log("CREATED NEW POST REQ")
          this.http.post(`https://localhost:7177/api/ProjectDeets`, newProject).subscribe({
            next: () => {
              console.log(`New project created and user ${user_id} allocated to it.`);
            },
            error: err => {
              console.error('Error creating new project:', err);
            }
          });
        }
      },
      error: err => {
        console.error('Error fetching project details:', err);
      }
    });
  }

  getdets() {
    this.http.get<any[]>('https://localhost:7177/api/DirectorRequirements').subscribe({
      next: (data) => {
        this.requests = data;
      },
      error: err => {
        console.error('Error fetching data:', err);
      }
    });
  }
}
