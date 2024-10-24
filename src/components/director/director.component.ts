import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-director',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
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


  async submitRequest(formdata: any) {
    
    console.log(formdata.value);

  }
}
