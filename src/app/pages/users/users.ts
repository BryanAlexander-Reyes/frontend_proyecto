import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  imports: [FormsModule],
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

  limpiarFormulario():void{
    this.id=0;
    this.nombre='';
    this.apellido='';
    this.correo='';
    this.rol='Aprendiz';
    this.estado=true;
  }

  registrarUsuario():void{
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
    alert('Usuario registrado correctamente.')
    this.limpiarFormulario();
  }
}
