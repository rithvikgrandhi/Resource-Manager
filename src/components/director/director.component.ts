import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-director',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css'],
})
export class DirectorComponent {
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

  skills: any[] = [
    { name: 'Frontend' },
    { name: 'Backend' },
    { name: 'Database' },
    { name: 'Fullstack' },
    { name: 'Cloud' },
  ];

  selectedSkills: string[] = [];
  selectedProject: string = '';
  dir_id: number = 0;
  res: any = {};
  res2: any;

  constructor(private http: HttpClient) {}

  postData(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(
      'https://talentsphere.azurewebsites.net/api/DirectorRequirements',
      data,
      { headers }
    )
  }

  async submitRequest(formdata: any) {
    localStorage.setItem('reqs', JSON.stringify(formdata.value));
    this.dir_id = Number(localStorage.getItem('userId')) || 0;
    formdata.value['dir_id'] = this.dir_id;

    console.log(formdata.value);
    this.res = {
      dirId: this.dir_id,
      projectId: Number(formdata.value.project_id),
      requirements: JSON.stringify({
        frontend: formdata.value.FrontendCount,
        backend: formdata.value.BackendCount,
        database: formdata.value.DatabaseCount,
        fullstack: formdata.value.FullstackCount,
        cloud: formdata.value.CloudCount,
      }),
    };
    console.log('check1', this.res);

    // Post the data

    console.log(this.res);
    this.postData(this.res).subscribe(
      (response) => {
        console.log('Data posted successfully:', response);
      },
      (error) => {
        console.error('Error posting data:', error);
      }
    );

    // Fetch the data
    // this.http.get('https://talentsphere.azurewebsites.net/api/DirectorRequirements/5').subscribe(
    //   data => {
    //     this.res2 = data;
    //     console.log(this.res2.requirements); // Log the entire response
    //   },
    //   error => {
    //     console.error('Error fetching data:', error);
    //   }
    // );
  }
}
