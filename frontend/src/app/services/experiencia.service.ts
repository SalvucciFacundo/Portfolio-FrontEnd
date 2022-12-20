import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencias } from '../models/experiencias';
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = environment.URL + 'experience';

  constructor(private http:HttpClient) { }

  public getExperience(id:number):Observable<Experiencias>{
    return this.http.get<Experiencias>(this.URL+'/'+id);
   }

  public getAllExperiences():Observable<Experiencias[]>{
    return this.http.get<Experiencias[]>(this.URL+'/all');
  }

  public createExperience(experiencia: Experiencias):Observable<Experiencias>{
    return this.http.post<Experiencias>(this.URL+'/create',experiencia);
  }

  public updateExperience(id:number,experiencia:Experiencias):Observable<Experiencias>{
    return this.http.put<Experiencias>(this.URL+'/'+id,experiencia);
  }
  
  public deleteExperience(id:number):Observable<Experiencias>{
    return this.http.delete<Experiencias>(this.URL+'/'+id);
  }
}
