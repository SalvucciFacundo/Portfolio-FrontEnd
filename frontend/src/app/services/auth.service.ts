import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL=environment.URL;
  
 // URL ="http://back-end-portafolio-production-8f53.up.railway.app/api"  + '/auth';
  

  constructor(private http: HttpClient) { }

  public createUser(user: Users):Observable<any>{
    return this.http.post<any>(this.URL+'/create',user);
  }

  public login(user:Users):Observable<any>{
    return this.http.post<any>(this.URL+'/login',user);
  }


}
