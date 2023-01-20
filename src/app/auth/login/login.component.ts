import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioSesion = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  formularioEnviado: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }

  enviarRegistroUsuario(): void {
    this.formularioEnviado = true;
    console.log("Formulario", this.formularioSesion.value);
    console.log(this.formularioSesion.valid);

    if (this.formularioSesion.valid) {
      let nuevoUsuario: loginUsuario = this.construirUsuario(this.formularioSesion.value)
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

}
