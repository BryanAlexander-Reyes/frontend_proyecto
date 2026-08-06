import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  imports: [FormsModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  // constructor para usar las rutas internas
  constructor(private router:Router){
    
  }

  // CREAR VARIABLE PARA ALMACENAR CORREO
  email: string ='';

  // variable para almacenar contraseña
  password: string='';

// contraseña quemada para realizar la prueba

  private readonly password_correcta: string= "123456";
  private readonly email_correcto: string="bryanreyes47k@gmail.com"
  // metodo para login que sera ejecutado al precionar el boton
  login (): void{
    
    if(this.email === this.email_correcto){
    console.log('correo:', this.email);
      if(this.password ===this.password_correcta){
        console.log('Password:', this.password);
        alert('El coreo y la contraseña es correcta. \n\n' + 'el correo es:' + this.email +'la contraseña que fue ingresada es:'+ this.password);
        localStorage.setItem('usuarioLogeado', 'true');
        this.router.navigate(['/dashboard']);
      }else{
        alert('La contraseña  no coincide. \n\n'+'La contraseña ingresada fue:'+this.password)
      }  
  }else{
    // modal para cuando se haga click al boton 
    alert('El email no coincide. \n\n' + 'El email ingresado fue:' + this.email);
  }
  }
  goToRegister():void{
  this.router.navigate(['/register'])
  }
}
