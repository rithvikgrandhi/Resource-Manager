import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api2',
  standalone: true,
  imports: [],
  templateUrl: './api2.component.html',
  styleUrl: './api2.component.css'
})
export class Api2Component {

  constructor(private http: HttpClient) { }

  postData(data: any){
    return this.http.post<any>("https://localhost:7177/api/DirectorRequirements", data);
  }


}
