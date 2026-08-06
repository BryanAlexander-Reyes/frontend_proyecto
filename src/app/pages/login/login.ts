import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";

interface UsuarioSistemas{
  nombre:string;
  correo:string;
  password:string;
  rol:string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  // constructor para usar las rutas internas
  constructor(private router:Router){}

  usuariosSistemas:UsuarioSistemas[]=[
    {
      nombre:'Administrador',
      correo:'admin@sena.edu.co',
      password:'123456',
      rol:'Administrador'
    },
    {
      nombre:'Fabian Instructor',
      correo:'instructor@sena.edu.co',
      password:'123456',
      rol:'instructor'
    },
    {
      nombre:'Pasta Aprendiz',
      correo:'pasta@sena.edu.co',
      password:'123456',
      rol:'Aprendiz'
    }
  ]

  // CREAR VARIABLE PARA ALMACENAR CORREO
  email: string ='';

  // variable para almacenar contraseña
  password: string='';

// contraseña quemada para realizar la prueba

  private readonly password_correcta: string= "123456";
  private readonly email_correcto: string="bryanreyes47k@gmail.com"
  // metodo para login que sera ejecutado al precionar el boton
  login (): void{
    
    const usuario=this.usuariosSistemas.find(
      u=>u.correo===this.email
    );
    if(!usuario){
      alert ('El correo no existe')
      return;
    }
    if(usuario.password!==this.password){
      alert('Contraseña incorrecta')
      return;
    }
    localStorage.setItem('usuarioLogueado', 'true');
    localStorage.setItem('Rol',usuario.rol);
    localStorage.setItem('Correo',usuario.correo);
    localStorage.setItem('Nombre',usuario.nombre);

    alert('Bienvenido al sistema '+ usuario.nombre + '\nRol: ' + usuario.rol);
    this.router.navigate(['/dashboard'])
  }
  goToRegister():void{
  this.router.navigate(['/register'])
  }
}
