import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from "@angular/common";

interface Usuario{
  id:number;
  nombre:string;
  apellido:string;
  correo:string;
  rol:string;
  estado:boolean;
}
@Component({
  selector: 'app-users',
  imports: [FormsModule, NgForOf, NgIf],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class UsersComponent implements OnInit {
  
  id:number=0;
  nombre:string='';
  apellido:string='';
  correo:string='';
  rol:string='aprendiz';
  estado:boolean=true;
  
  // variables de listas para usuarios, un arreglo de usuario

  usuarios:Usuario[]=[];

  // mensajes de errores
  mensajes:string=''
  tipoMensaje:'success'  | 'error'  |  ''='';

  // Bandera para saber si se esta editando un usuario

  modoEdicion: boolean=false;

  

  // linea que utiliza metodo para iniciar desde el principio
  ngOnInit(): void {
    this.cargarDatosIniciales();
  }

  cargarDatosIniciales():void{
    this.usuarios=[
      {
        id:1,
        nombre:'Brayan',
        apellido:'Reyes',
        correo:'bryan@gmail.com',
        rol:'Administrador',
        estado:true,
      },
      {
        id:2,
        nombre:'Maria',
        apellido:'Rodriguez',
        correo:'maria@sena.edu.co',
        rol:'Instructor',
        estado:true,
      },
      {
        id:3,
        nombre:'Juan',
        apellido:'Gomez',
        correo:'juan@sena.edu.co',
        rol:'Aprendiz',
        estado:false,
      }
    ]
  }

  // otra manera de validar 
  validadorCorreo(correo:string): boolean{
    const expresion=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA]{2,}$/;
    return expresion.test(correo)
  }


  correoExiste(correo:string): boolean{
    return this.usuarios.some(usuario=>usuario.correo.toLowerCase()===correo.toLowerCase())
  }
  limpiarFormulario():void{

    const respuesta= confirm('¿Desea limpiar el Formulario?')
    if (!respuesta){
      return
    }
    this.id=0;
    this.nombre='';
    this.apellido='';
    this.correo='';
    this.rol='Aprendiz';
    this.estado=true;
    this.mensajes='';
  }

  registrarUsuario():void{

    // validacion de campos
    if(this.nombre.trim()===''|| this.apellido.trim()===''||this.correo.trim()===''){
      this.tipoMensaje='error';
      this.mensajes='Todos los campos son obligatorios';
      return
    }

    // validacion correo
    if(!this.validadorCorreo(this.correo)){
      this.tipoMensaje='error';
      this.mensajes='El formato del correo es incorrecto';
      return
    }

    // validar duplicados
    if(this.correoExiste(this.correo)){
      this.tipoMensaje='error';
      this.mensajes='El correo ya se encuentra registrado.';
      return
    }

    // se construye un nuevo objeto usuario utilizando la informacion ingresada en el formulario
    const nuevoUsuario:Usuario={
      id:this.usuarios.length+1,
      nombre:this.nombre,
      apellido:this.apellido,
      correo:this.correo,
      rol:this.rol,
      estado:this.estado,
    };
    // agrega el nuevo objeto al arreglo
    this.usuarios.push(nuevoUsuario);
    this.tipoMensaje='success';
    this.mensajes='Usuario registrados correctamente.';

    this.limpiarFormularioAutomaticamente();
  }
  limpiarFormularioAutomaticamente():void{
    this.id=0;
    this.nombre='';
    this.apellido='';
    this.correo='';
    this.rol='Aprendiz';
    this.estado=true;
  }
  obtenerTotalUsuarios():number{
    return this.usuarios.length;
  }
}
