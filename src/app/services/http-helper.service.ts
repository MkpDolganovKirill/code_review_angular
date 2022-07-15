import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { IProject, IUser } from "src/app/interfaces/users.interfaces";

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

  public getAllUsers(): Observable<any> {
    return this.http.get<any>(`${environment.url}/user/all`);
  }

  public getUserDiff(user: IUser | undefined, project: IProject | undefined): Observable<any> {
    console.log("user ", user);
    console.log("project ", project);
    if (!user && ! project) return new Observable<any>();
    return this.http.post<any>(`${environment.url}/ssh/repository/diff/get`, {
      "username": user?.username,
      "projectName": project?.projectName,
      "ip": user?.ip,
      "repositoryPath": project?.repositoryPath,
      "diffType": project?.diffType,
      "commitId": project?.commitId
    })
  }

  public createNewRepository(project: IProject): Observable<any> {
    return this.http.post<any>(`${environment.url}/ssh/repository/project/add`, {
      projectName: project.projectName,
      repositoryPath: project.repositoryPath,
      diffType: project.diffType,
      commitId: project.commitId
    });
  }
}
