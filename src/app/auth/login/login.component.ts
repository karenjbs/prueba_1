import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  constructor(private fb: FormBuilder, private authService: AuthService) { }
  ngOnInit(): void {
  }

  registrarUsuario() {
    console.log(this.formularioSesion);
    this.authService.login(this.formularioSesion).subscribe((respuesta:Response) => {
      console.log(respuesta);
    })}

  campoNoValido(campo: string) {

    if (this.formularioSesion.get(campo)?.invalid && this.formularioEnviado) {
      return true;
    } else {
      return false;
    }
  }

  iniciarSesion(){
    console.log(this.formularioSesion.value);

  }

}
