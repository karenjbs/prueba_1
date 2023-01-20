import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { loginUsuario } from "src/app/models/login-usuario";
import { AuthService } from "src/app/services/auth.service";


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})

export class RegisterComponent implements OnInit {

  formularioRegistro = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  formularioEnviado: boolean = false;
  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }

  enviarRegistroUsuario(): void {
    this.formularioEnviado = true;
    console.log("Formulario", this.formularioRegistro.value);
    console.log(this.formularioRegistro.valid);

    if (this.formularioRegistro.valid) {
      let nuevoUsuario: loginUsuario = this.construirUsuario(this.formularioRegistro.value)
      console.log("Nuevo Usuario", nuevoUsuario);
      this.authService.registrar(nuevoUsuario).subscribe((respuesta: any) => {
        console.log(respuesta);
        if (respuesta) {
          this.router.navigateByUrl('/**')
        }
      }
      )
    }
  }

  construirUsuario(data: any) {
    return new loginUsuario(data.email, data.password);
  }

  redireccionarIniciarSesion() {
    this.router.navigateByUrl('/iniciar sesion')
  }
}
