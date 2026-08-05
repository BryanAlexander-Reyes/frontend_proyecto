import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit, OnDestroy{

  nombraSistema:string= 'Sistema ADSO';
  descripcionSistema:string='Plataforma academica para la gestion institucional';
  usuario: string = 'Administrador';
  rol: string='Admin del sistema';
  fechaActual:string='';
  horaActual:string='';

  private intervalo:any;

  ngOnInit(): void {
    this.actualizarFechaHora();
    this.intervalo=setInterval(()=>{
      this.actualizarFechaHora();
    },1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  actualizarFechaHora():void{
    const ahora = new Date();
    this.fechaActual=ahora.toLocaleDateString(
      'es.CO',{
        weekday:'long',
        day:'2-digit',
        month:'long',
        year:'numeric'
      }
    );
    this.horaActual=ahora.toLocaleTimeString(
      'es-Co',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
      }
    );
  }
  cerrarSesion():void{
    alert('Aqui se cerro sesión')
  }
}
