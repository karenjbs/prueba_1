import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environments/environment';


const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  registrar(user:any): Observable<any>{
    return this.http.post(url+"/api/register",user)
  }

  login(user:any): Observable<any>{
    return this.http.post(url+"/api/login",user)
  }

}
