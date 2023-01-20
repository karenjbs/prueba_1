import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/assets/environments/environment';
import { Usuario } from '../models/usuario';


const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uri = 'https://reqres.in/api/';

  getUsersId(id: string | null) {
    return this.http.get(url + "/api/users/2/" + id);
  }

  constructor(private http: HttpClient) { }
  gerUsers() {
    return this.http.get("https://reqres.in/api/users?page=2");
  }

  saveUser(usuario: Usuario) {
    return this.http.post(url + "/api/users/", usuario);
  }

  putUser(usuario: Usuario) {
    return this.http.put(url + "/api/users/2/" + usuario.id, usuario);
  }

  deleteUser(id: number) {
    return this.http.delete(url + "/api/users/2/" + id);
  }

}
