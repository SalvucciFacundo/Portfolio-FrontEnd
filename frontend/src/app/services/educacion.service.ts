import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL ="http://back-end-portafolio-production-8f53.up.railway.app/api" + '/education';
 
  constructor(private http:HttpClient) { }

  public getEducation(id:number):Observable<Educacion>{
    //return this.http.get<Educacion>(this.URL+'/'+id);
    return this.http.get<Educacion>(this.URL+`/${id}`);
   }

  public getAllEducation():Observable<any>{
    return this.http.get<any>(this.URL+'/all');
  }

  public createEducation(educacion: Educacion):Observable<any>{
    return this.http.post<any>(this.URL+'/create',educacion);
  }

  public updateEducation(id:number,educacion:Educacion):Observable<any>{
    return this.http.put<any>(this.URL+`/${id}`,educacion);

  }
  
  public deleteEducation(id:number):Observable<any>{
    return this.http.delete<any>(this.URL+`/${id}`);
  }


}
