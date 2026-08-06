import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-login',
  imports: [FormsModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  // constructor para usar las rutas internas
  constructor(private router:Router, private authService:AuthService){}

  

  // CREAR VARIABLE PARA ALMACENAR CORREO
  email: string ='';

  // variable para almacenar contraseña
  password: string='';

// contraseña quemada para realizar la prueba

  // private readonly password_correcta: string= "123456";
  // private readonly email_correcto: string="bryanreyes47k@gmail.com"
  // metodo para login que sera ejecutado al precionar el boton
  login (): void{

    const autenticado=this.authService.iniciarSesion(this.email, this.password);
    if(!autenticado){
      alert ('Correo o contraseña incorrecta')
      return;
    }
    const usuario=this.authService.obtenerUsuario();
    alert (`Bienvenido al sistema ${usuario?.nombre}\nrol: ${usuario?.rol}`)


    this.router.navigate(['/dashboard'])
  }
  goToRegister():void{
  this.router.navigate(['/register'])
  }
}
