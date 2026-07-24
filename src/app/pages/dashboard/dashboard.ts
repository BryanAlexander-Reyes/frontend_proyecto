import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  usuario: string='administrador'
  rol: string='Administrador del sistema'


  // metodo para mostrar mensaje

  mostrarMensaje():void{
    alert('bienvenido al Dashboard del sistema');
  }
}
