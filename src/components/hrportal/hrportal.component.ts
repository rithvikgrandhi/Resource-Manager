import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  countedSkills: { [key: string]: number } = {}; // Initialize countedSkills
  names: { [key: number]: string } = {}; // Dictionary to store names
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


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRequests(); // Fetch requests on component initialization
  }

  removeEmployee(employeeId: number) {
    this.http.delete(`https://talentsphere.azurewebsites.net/api/AvailableEmps/${employeeId}`).subscribe({
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

    this.http.put(`https://talentsphere.azurewebsites.net/api/DirectorRequirements/${reqId}`, fullRequest).subscribe({
      next: () => {
        this.handleApprovedRequest(selectedRequest, projectId, directorId);
      },
      error: err => {
        console.error('Approval failed', err);
        alert('An error occurred while approving the request.');
      }
    });
  }

  private handleApprovedRequest(selectedRequest: any, projectId: number, directorId: number) {
    const requirements = JSON.parse(selectedRequest.requirements);
    for (const [skill, count] of Object.entries(requirements)) {
      const countValue = count as number;
      if (countValue > 0) {
        this.fetchAvailableEmployees(skill, countValue, projectId, directorId);
      }
    }
    selectedRequest.approved = true; // Update the approved status
    this.countSkills(); // Update the skills count after approval
  }

  private fetchAvailableEmployees(skill: string, countValue: number, projectId: number, directorId: number) {
    this.http.get<Employee[]>(`https://talentsphere.azurewebsites.net/api/AvailableEmps/GetBySkill/${skill}`).subscribe({
      next: (employees) => {
        if (employees.length === 0) {
          alert('There are no employees left to assign for this skill.');
          return;
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
    this.http.get<Project[]>(`https://talentsphere.azurewebsites.net/api/ProjectDeets`).subscribe({
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

    this.http.put(`https://talentsphere.azurewebsites.net/api/ProjectDeets/${project.projectId}`, updatedProject).subscribe({
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

    this.http.post(`https://talentsphere.azurewebsites.net/api/ProjectDeets`, newProject).subscribe({
      next: () => console.log(`New project created and user ${userId} allocated to it.`),
      error: err => console.error('Error creating new project:', err)
    });
  }

  private getRequests() {
    this.http.get<any[]>('https://talentsphere.azurewebsites.net/api/DirectorRequirements').subscribe({
      next: (data) => {
        this.requests = data.map(req => ({
          ...req,
          disabled: false, // Initialize disabled based on your logic
          approved: req.approved // Ensure this property exists in your API response
        }));

        // Fetch names for each directorId
        this.requests.forEach(req => {
          this.fetchName(req.dirId); // Fetch name and store it
        });

        this.countSkills(); // Call to count skills after fetching requests
        console.log("requests====", this.requests);
      },
      error: err => console.error('Error fetching data:', err)
    });
  }

  private fetchName(id: number) {
    if (this.names[id]) {
      return; // If the name is already fetched, do nothing
    }

    this.http.get<any>(`https://talentsphere.azurewebsites.net/api/Users/${id}`).subscribe(
      (response) => {
        this.names[id] = response.fullName; // Adjust according to your response structure
      },
      error => {
        console.error('Error fetching user:', error);
      }
    );
  }

  private countSkills() {
    this.countedSkills = {}; // Reset counted skills

    this.http.get<Employee[]>("https://talentsphere.azurewebsites.net/api/AvailableEmps").subscribe({
      next: (data) => {
        console.log("scam", data);
        // Count skills from the fetched employee data
        data.forEach(employee => {
          const skill = employee.skill; // Get the employee's skill
          if (skill) {
            this.countedSkills[skill] = (this.countedSkills[skill] || 0) + 1; // Increment count for the skill
          }
        });

        // Log counted skills for debugging
        console.log('Counted Skills:', this.countedSkills);
      },
      error: err => {
        console.error('Error fetching employee data:', err);
      }
    });
  }
}
