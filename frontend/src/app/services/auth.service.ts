import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.URL + 'auth';
  
  constructor(private http: HttpClient) { }

  public createUser(user: Users):Observable<any>{
    return this.http.post<any>(this.URL+'/create',user);
  }

login(user:Users){
  return this.http.post('http://localhost:8080/login', user,{
    observe:'response'
  }).pipe(map((response:HttpResponse<any>)=>{
    const body = response.body;
    const headers = response.headers;
    const bearerToken = headers.get('Authorization')!;
    const token = bearerToken.replace('Bearer ','');

    localStorage.setItem('token',token);

    return body;
  }))
}

getToken(){
  return localStorage.getItem('token');
}


}
