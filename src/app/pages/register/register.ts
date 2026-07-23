import { Component } from '@angular/core';
// IMPORTACION DE MODULOS DE FORMULARIO
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  // Propiedades o campos del formulario

  nombre: string='';
  apellido: string='';
  correo:string='';
  password: string='';
  confirmarpassword: string='';



  // METODO SIMULADO PARA EL REGISTRO DEL USUARIO

  registroUsuario(): void{
    console.log('Nombre:', this.nombre);
    console.log('apellido:', this.apellido);
    console.log('correo:', this.correo);
    console.log('password:', this.password);

    alert('Usuario Registrado')
  }
}
