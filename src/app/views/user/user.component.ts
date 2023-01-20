import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  usuarios: Usuario[] = [];

    id: string="";
    email: string="";
    first_name: string="";
    last_name: string="";
    avatar: string="";

  constructor( private userService: UserService, private router: Router) { }

  ngOnInit(): void {}


eliminarUsuario(id:any){
  console.log(id);
  this.userService.deleteUser(id).subscribe((data:any)=>  {
    console.log(data);
    this.getUsuarios();
  })
}


registarUsuario(){
  let usuario: Usuario = this.editarUsuario(this.getUsuarios)
  console.log(usuario);

  this.userService.saveUser(usuario).subscribe((data:any) =>{
    if(data){
      this.router.navigateByUrl('/usuarios')
    }
  })

}

editarUsuario(data:any){
  return new Usuario (data.id, data.email, data.first_name, data.last_name, data.avatar);
}

getUsuarios(){
  this.userService.gerUsers().subscribe((data: any) =>{
    this.usuarios = data;
  })
}

redireccionarVistaEditar() {
  this.router.navigateByUrl('/productos')
}

}
