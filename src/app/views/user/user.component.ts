import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
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
    this.userService.deleteUser(data).subscribe((response: any) => {
      console.log(response);
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

}
