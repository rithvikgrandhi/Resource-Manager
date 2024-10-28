// src/app/services/client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Certifications } from '../components/certification-dashboard/certification-dashboard.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class certificationService  {
  _http: HttpClient;

  constructor(_httpRef: HttpClient) {
    this._http = _httpRef;
  }

  httpOptions={
    headers:new HttpHeaders({'Content-Type' :'application/json'})
  }
  
  getCertificationDetails(): Observable<Certifications[]> {
    return this._http.get<Certifications[]>("https://talentsphere.azurewebsites.net/api/Certifications/UserCertifications");
  }

  postCertification(certification: Certifications): Observable<Certifications> {
    return this._http.post<Certifications>("https://talentsphere.azurewebsites.net/api/Certifications", certification);
}
  putCertification(id: number, certification: Certifications): Observable<void> {
  return this._http.put<void>(`https://talentsphere.azurewebsites.net/api/Certifications/${id}`, certification);
}

  deleteCertification(id: number): Observable<void> {
    return this._http.delete<void>(`https://talentsphere.azurewebsites.net/api/Certifications/${id}`);
}

approveCertification(id: number): Observable<void> {
  const payload = JSON.stringify({ status: 'Approved' });
  return this._http.put<void>(
    `https://talentsphere.azurewebsites.net/api/Certifications/${id}/status`, 
    payload, 
    this.httpOptions
  );
}

  rejectCertification(id: number): Observable<void> {
    return this._http.post<void>(
      `https://talentsphere.azurewebsites.net/api/Certifications/${id}/reject`,
      null
    );
  }

  updateCertificationStatus(certificationId: number, status: boolean): Observable<void> {
    const url = `https://talentsphere.azurewebsites.net/api/Certifications/${certificationId}/status`;
    const payload = JSON.stringify({ status: status });

    return this._http.patch<void>(url, payload, this.httpOptions);
  }

  updateClient(updateClientData: any) {
    const url = `https://talentsphere.azurewebsites.net/api/Certifications/${updateClientData.certificationId}/status`;
    const payload = JSON.stringify({ status: updateClientData.status });

    this._http.put(url, payload, this.httpOptions).subscribe(response => {
      console.log('Data updated:', response);
      alert('Updated');
    });
  }

}
