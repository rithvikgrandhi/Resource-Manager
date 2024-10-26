import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Project {
  projectId: number;
  directorId: number;
  members: string; // Assuming this is a comma-separated string
}

export interface Employee {
  empId: number;
  skill: string;
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
    this.getRequests(); // Fetch requests on component initialization
  }

  removeEmployee(employeeId: number) {
    this.http.delete(`https://localhost:7177/api/AvailableEmps/${employeeId}`).subscribe({
      next: () => console.log(`Successfully removed employee with ID: ${employeeId}`),
      error: err => console.error('Error removing employee:', err)
    });
  }

  disableButtons(reqId: number) {
    const request = this.requests.find(r => r.reqId === reqId);
    if (request) {
      request.disabled = true; // Disable buttons for this request
    }
  }

  approve(reqId: number, projectId: number, directorId: number) {
    const selectedRequest = this.requests.find(req => req.reqId === reqId);
    if (!selectedRequest) {
      console.error('Request not found');
      return;
    }

    const fullRequest = {
      reqId: selectedRequest.reqId,
      dirId: selectedRequest.dirId,
      projectId: selectedRequest.projectId,
      requirements: selectedRequest.requirements,
      approved: true,
      dir: selectedRequest.dir // Include other necessary fields
    };

    this.http.put(`${'https://localhost:7177/api/DirectorRequirements'}/${reqId}`, fullRequest).subscribe({
      next: () => {
        selectedRequest.approved = true; // Update the approved status

        const requirements = JSON.parse(selectedRequest.requirements);
        for (const [skill, count] of Object.entries(requirements)) {
          const countValue = count as number;
          if (countValue > 0) {
            this.fetchAvailableEmployees(skill, countValue, projectId, directorId);
          }
        }
      },
      error: err => {
        console.error('Approval failed', err);
        alert('An error occurred while approving the request.');
      }
    });
  }

  private fetchAvailableEmployees(skill: string, countValue: number, projectId: number, directorId: number) {
    this.http.get<Employee[]>(`https://localhost:7177/api/AvailableEmps/GetBySkill/${skill}`).subscribe({
      next: (employees) => {
        if (employees.length === 0) {
          alert('There are no employees left to assign for this skill.');
        }

        for (let i = 0; i < countValue && i < employees.length; i++) {
          const employeeId = employees[i].empId; // Get the employee ID
          console.log("Calling delete for employee ID:", employeeId);
          this.removeEmployee(employeeId); // Remove employee by ID
          this.allocateUser(projectId, directorId, employeeId);
        }
      },
      error: err => {
        console.error('Error fetching available employees:', err);
        alert('An error occurred while fetching available employees.');
      }
    });
  }

  private allocateUser(reqId: number, directorId: number, userId: number) {
    this.http.get<Project[]>(`https://localhost:7177/api/ProjectDeets`).subscribe({
      next: (projects) => {
        const project = projects.find(p => p.projectId === reqId);
        if (project) {
          this.updateProjectMembers(project, directorId, userId);
        } else {
          this.createNewProject(reqId, directorId, userId);
        }
      },
      error: err => console.error('Error fetching project details:', err)
    });
  }

  private updateProjectMembers(project: Project, directorId: number, userId: number) {
    const members: string[] = project.members ? project.members.split(',').map(id => id.trim()) : [];
    if (!members.includes(userId.toString())) {
      members.push(userId.toString());
    }

    const updatedProject: Project = {
      projectId: project.projectId,
      directorId: directorId,
      members: members.join(', ')
    };

    this.http.put(`https://localhost:7177/api/ProjectDeets/${project.projectId}`, updatedProject).subscribe({
      next: () => console.log(`User ${userId} allocated to project ${project.projectId}`),
      error: err => console.error('Error allocating user:', err)
    });
  }

  private createNewProject(reqId: number, directorId: number, userId: number) {
    const newProject: Project = {
      projectId: reqId,
      directorId: directorId,
      members: userId.toString() // Start with the new user as the only member
    };

    this.http.post(`https://localhost:7177/api/ProjectDeets`, newProject).subscribe({
      next: () => console.log(`New project created and user ${userId} allocated to it.`),
      error: err => console.error('Error creating new project:', err)
    });
  }

  private getRequests() {
    this.http.get<any[]>('https://localhost:7177/api/DirectorRequirements').subscribe({
      next: (data) => {
        this.requests = data.map(req => ({
          ...req,
          disabled: false, // Initialize disabled based on your logic
          approved: req.approved // Ensure this property exists in your API response
        }));
      },
      error: err => console.error('Error fetching data:', err)
    });
  }
}
