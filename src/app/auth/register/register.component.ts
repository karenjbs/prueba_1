import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})

export class RegisterComponent {

  "email": "";
  "password": "";

  constructor(public authService: AuthService, private router: Router) { }

  registrarUsuario() {
    const user = { email: this.email, password: this.password };
    this.authService.registrar(user).subscribe(data => {
      console.log(data);
    });

    console.log("email");

  }

  redireccionarIniciarSesion() {
    this.router.navigateByUrl('/iniciar sesion')
  }
}
