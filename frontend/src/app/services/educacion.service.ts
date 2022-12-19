import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = environment.URL + 'education';
  constructor(private http:HttpClient) { }

  public getEducation(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.URL+'/'+id);
   }

  public getAllEducation():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL+'/all');
  }

  public createEducation(educacion: Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.URL+'/create',educacion);
  }

  public updateEducation(id:number,educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(this.URL+'/'+id,educacion);
  }
  
  public deleteEducation(id:number):Observable<Educacion>{
    return this.http.delete<Educacion>(this.URL+'/'+id);
  }


}
