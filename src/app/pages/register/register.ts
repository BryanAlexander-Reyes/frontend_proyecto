import { Component } from '@angular/core';
// IMPORTACION DE MODULOS DE FORMULARIO
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import{
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms'

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {

// FORMULARIO PRINCIPAL DEL COMPONENTE

  registerForm: FormGroup;

  // Constructor
  constructor(private router:Router, private fb:FormBuilder){
    this.registerForm= this.fb.group({
      // primer campo del formulario
      nombre:['',[
        Validators.required,
        Validators.minLength(3)
      ]],
      // segundo campo de formulario
      apellido:['',[
        Validators.required,
        Validators.minLength(3)
      ]],
      // tercer campo
      correo:['',[
        Validators.required,
        Validators.email,
      ]],
      // cuarto campo 
      password:['',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
      ]],
      // quinto campo de formulario
      confirmarPassword:['',[
        Validators.required
      ]],
      
    },
    {
      validators:this.passwordIguales
    }
  );
  }
  // Propiedades o campos del formulario

  // nombre: string='';
  // apellido: string='';
  // correo:string='';
  // password: string='';
  // confirmarpassword: string='';

// METODO GET PARA ACCEDER A LOS DATOS
get nombre(){
  return this.registerForm.get('nombre')
}

get apellido(){
  return this.registerForm.get('apellido')
}

get correo(){
  return this.registerForm.get('correo')
}

get password(){
  return this.registerForm.get('password')
}

get confirmarPassword(){
  return this.registerForm.get('confirmarPassword')
}

passwordIguales(form: AbstractControl):ValidationErrors|null{
  const password = form.get('password')?.value;
  const confirmar = form.get('confirmarPassword')?.value;

  if (password===confirmar){
    return null;
  }
  return {
    passwordNoCoincide: true
  }
}


  // METODO SIMULADO PARA EL REGISTRO DEL USUARIO

  registroUsuario(): void{

    // validacion si el formulario es invalido
    if (this.registerForm.invalid){
      // marca todos los campos que muestra error
      this.registerForm.markAllAsTouched()
      return;
    
    }
    console.log(this.registerForm.value)

    alert('Usuario Registrado')
    this.router.navigate(['/login']);
}
}