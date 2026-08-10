import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';

interface MenuItem{
  icono:string;
  nombre:string;
  ruta:string;
  roles:string[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  constructor (private authService:AuthService){
    
    this.rolUsuario=this.authService.obtnerRol();
    this.cargarMenu();
  }

  rolUsuario:string='';
  menuVisible:MenuItem[]=[];
  menu:MenuItem[]=[
    {
      icono:'🏠',
      nombre:'Dashboard',
      ruta:'/dashboard',
      roles:[
        'Administrador'
      ]
    },
    {
      icono:'🙍‍♂️',
      nombre:'Usuarios',
      ruta:'/users',
      roles:[
        'Administrador',
        'Instructor'
      ]
    },
    {
      icono:'🤖',
      nombre:'Roles',
      ruta:'/roles',
      roles:[
        'Administrador'
        
      ]
    },
    {
      icono:'📚',
      nombre:'Cursos',
      ruta:'/cursos',
      roles:[
        'Administrador','Instructor','Aprendiz'
      ]
    }
  ];
  private cargarMenu():void{
    this.menuVisible=this.menu.filter(opcion=>opcion.roles.includes(this.rolUsuario))
  }
}
