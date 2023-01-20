import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { Usuarios } from 'src/app/models/usuarios';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuarios: Usuario[] = [];
  listaUsuarios = this.fb.group({
    data: ["", Validators.required],
    id: ["", Validators.required],
    email: ["", Validators.required],
    first_name: ["",Validators.required],
    last_name: ["",Validators.required],
    avatar: [""],
  }, {});

  constructor(private fb: FormBuilder,private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  eliminarUsuario(data: any) {
    console.log(data);
    this.userService.deleteUser(data).subscribe((data: any) => {
      console.log(data);
      this.listar();
    })
  }

  listar() {
    this.userService.getUsers().subscribe((response: any) => {
      this.usuarios = response.data;
    })
  }

  redireccionarVistaEditar() {
    this.router.navigateByUrl('/**')
  }

  editarUsuario(data: any){
    let editarUsuario:Usuarios = this.transformaUsuario(this.usuarios)
    console.log("Editar Usuario", editarUsuario);
    this.userService.saveUser(data).subscribe((response: any) => {
      console.log(response);
    })
  }

  agregarUsuario(data: any){
    let agregarUsuario:Usuarios = this.transformaUsuario(this.usuarios)
    console.log("Agregar Usuario", agregarUsuario);

    this.userService.putUser(data).subscribe(data=>{
      console.log(data);
    })
  }

  transformaUsuario(data:any){
    let usuarios = new Usuarios(data.name, data.job);
    return new Usuarios(data.name, data.job);
  }



}
