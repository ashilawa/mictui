import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientScheduleService {

  constructor(private http: HttpClient) { }

  /* baseUrl: string = 'http://10.30.10.78:8082/patientscedular/preferences  '; */
  baseUrl: string = 'http://10.30.10.78:8079/patientscedular';

  public getpatientScheduleData():Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public submitPatientScheduleData(data):Observable<any> {
    return this.http.post(this.baseUrl, data,{
      headers: {
      'Content-Type': 'application/json'
    }});
  }
}
