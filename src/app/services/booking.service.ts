import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'

})
export class BookingService {
  baseUrl: string = "http://localhost:3000/";

  httpHeaders: HttpHeaders = new HttpHeaders({
    "content-type": "application/json"
  });

  constructor(private http: HttpClient) { }

  getDataFromServer(endPoint: string): Observable<any> {
    const url = this.baseUrl + endPoint;
    return this.http.get(url, { 'headers': this.httpHeaders });
  }
  postDataToServer(endPoint:string,data:any): Observable<any> {
    const url=this.baseUrl + endPoint;
    return this.http.post(url,data,{ 'headers': this.httpHeaders});

  }
  putDataToServer(endPoint:string,data:any): Observable<any> {
    const url=this.baseUrl + endPoint;
    return this.http.put(url,data,{headers:this.httpHeaders});

  }
  deleteDataFromServer(endPoint:string):Observable<any>{
    const url = this.baseUrl + endPoint ;
    return this.http.delete(url,{headers:this.httpHeaders});
   }
 

  
}
