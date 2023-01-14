import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Experiencias } from '../models/experiencias.model';
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL ="http://back-end-portafolio-production-8f53.up.railway.app/api"  + '/experience';
 
  constructor(private http:HttpClient) { }

  public getExperience(id:number):Observable<Experiencias>{
    return this.http.get<Experiencias>(this.URL+`${id}`);
   }

  public getAllExperiences():Observable<Experiencias[]>{
    return this.http.get<Experiencias[]>(this.URL+'/all');
  }

  public createExperience(experiencia: Experiencias):Observable<any>{
    return this.http.post<any>(this.URL+'/create',experiencia);
  }

  public updateExperience(id:number,experiencia:Experiencias):Observable<any>{
      return this.http.put<any>(this.URL+`/${id}`,experiencia);
  }
  
  public deleteExperience(id:number):Observable<any>{
    return this.http.delete<any>(this.URL+`/${id}`);
  }
}
