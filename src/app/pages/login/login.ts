import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  // CREAR VARIABLE PARA ALMACENAR CORREO
  email: string ='';

  // variable para almacenar contraseña
  password: string='';

// contraseña quemada para realizar la prueba

  private readonly password_correcta: string= "123456";

  // metodo para login que sera ejecutado al precionar el boton
  login (): void{

    if(this.password === this.password_correcta){
    console.log('correo:', this.email);
    console.log('Password:', this.password);
    alert('la contraseña es correcta. \n\n' + 'la contraseña que fue ingresada es:'+ this.password);
    window.location.href='https://www.google.com' 
  }else{
    // modal para cuando se haga click al boton 
    alert('la contraseña no coincide. \n\n' + 'la contraseña ingresada fue:' + this.password);
  }
  }
}
