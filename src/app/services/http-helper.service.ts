import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private http: HttpClient) {}

  public checkUser(): Observable<any> {
    return this.http.get<any>(`${environment.url}/user/check`);
  }

  public createUser(username: string): Observable<any> {
    return this.http.get<any>(`${environment.url}/user/add?username=${username}`);
  }
}
