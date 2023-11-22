import { Injectable } from '@angular/core';
import { Project } from '../Model/Project';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private json_url="/assets/data/projects.json";
  constructor(private http:HttpClient) { }
  getProjectDetailsByHTTP():Observable<Project[]>
  {
    return this.http.get<Project[]>(this.json_url);
  }
}
