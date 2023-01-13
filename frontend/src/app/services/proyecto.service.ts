import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Proyectos } from '../models/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  //URL ="http://back-end-portafolio-production-8f53.up.railway.app/api"  + '/project';
  URL=environment.URL;
  constructor(private http:HttpClient) { }

  public getProject(id:number):Observable<Proyectos>{
    return this.http.get<Proyectos>(this.URL+`${id}`);
   }

  public getAllProject():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.URL+'/all');
  }

  public createProject(project: Proyectos):Observable<any>{
    return this.http.post<any>(this.URL+'/create',project);
  }

  public updateProject(id:number,project:Proyectos):Observable<any>{
      return this.http.put<any>(this.URL+`/${id}`,project);
  }
  
  public deleteProject(id:number):Observable<any>{
    return this.http.delete<any>(this.URL+`/${id}`);
  }

}
