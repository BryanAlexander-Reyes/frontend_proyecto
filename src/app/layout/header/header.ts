import { Component, OnDestroy, OnInit, signal, } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements OnInit, OnDestroy{

  nombraSistema:string= 'Sistema ADSO';
  descripcionSistema:string='Plataforma academica para la gestion institucional';
  usuario: string = 'Administrador';
  rol: string='Admin del sistema';
  fechaActual=signal('');
  horaActual=signal('');

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
    this.fechaActual.set (ahora.toLocaleDateString(
      'es-CO',{
        weekday:'long',
        day:'2-digit',
        month:'long',
        year:'numeric'
      }
    ));
    this.horaActual.set(ahora.toLocaleTimeString(
      'es-CO',{
        hour12: false
      }
    ));
  }
  cerrarSesion():void{
    alert('Aqui se cerro sesión')
  }
}
