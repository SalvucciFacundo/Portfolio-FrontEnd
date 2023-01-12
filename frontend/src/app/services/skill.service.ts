import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  URL = environment.URL + 'skills';

  constructor(private http:HttpClient) { }

  public getType(tipo:string):Observable<Skills[]>{
    return this.http.get<Skills[]>(this.URL+'/type'+'?type='+tipo)
  }

  public getSkill(id:number):Observable<Skills>{
    return this.http.get<Skills>(this.URL+`${id}`);
   }

  public getAllSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.URL+'/all');
  }

  public createSkill(skill: Skills):Observable<any>{
    return this.http.post<any>(this.URL+'/create',skill);
  }

  public updateSkill(id:number,skill:Skills):Observable<any>{
      return this.http.put<any>(this.URL+`/${id}`,skill);
  }
  
  public deleteSkill(id:number):Observable<any>{
    return this.http.delete<any>(this.URL+`/${id}`);
  }


}
