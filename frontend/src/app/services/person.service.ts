import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  //URL ="http://back-end-portafolio-production-8f53.up.railway.app/api" + '/person';
  URL=environment.URL;
  constructor(private http:HttpClient) { }

  public getAllPerson():Observable<any>{
    return this.http.get<any>(this.URL+'/all');
  }

  public getPerson(id:number):Observable<Person>{
   return this.http.get<Person>(this.URL+'/'+id);
  }

   public editPerson(id:number,persona:Person):Observable<Person>{
    return this.http.put<Person>(this.URL+`/`+id,persona);
  }


}
