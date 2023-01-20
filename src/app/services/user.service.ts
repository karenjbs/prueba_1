import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/assets/environments/environment';
import { Usuario } from '../models/usuario';
import { Usuarios } from '../models/usuarios';


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
  getUsers() {
    return this.http.get("https://reqres.in/api/users?page=1");
  }

  saveUser(usuario: Usuarios) {
    return this.http.post(url + "/api/users", usuario);
  }

  putUser(usuario: Usuarios) {
    return this.http.put(url + "/api/users/2" + usuario, usuario);
  }

  deleteUser(id: number) {
    return this.http.delete(url + "/api/users/2" + id);
  }

}
