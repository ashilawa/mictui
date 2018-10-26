import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ECGService {

  constructor(private http: HttpClient) { }

  /* baseUrl: string = 'http://10.30.10.78:8081/cardiac/preferences'; */
  baseUrl: string = 'http://10.30.10.78:8079/cardiac ';

  public getECGData():Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public submitECGData(data):Observable<any> {
    return this.http.post(this.baseUrl, data,{
      headers: {
      'Content-Type': 'application/json'
    }
  }
  )
}
}
