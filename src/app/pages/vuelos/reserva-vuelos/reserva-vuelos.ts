import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// el dialog es como un alert casi nunca se va a utilizar
import { MatDialog } from '@angular/material/dialog';

interface  Vuelo{
  id:number;
  origin:string;
  destino:string;
  hora:string;
  precio:number;
  duracion:string;
}

@Component({
  selector: 'app-reserva-vuelos',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,

  ],
  templateUrl: './reserva-vuelos.html',
  styleUrl: './reserva-vuelos.css',
})
export class ReservaVuelosComponent {
  vuelos:Vuelo[]=[
    {
      id:1,
    origin:'Bogota',
    destino:'Medellin',
    hora:'8:30',
    precio:180000,
    duracion:'1h 05m,',
    },
    {
      id:2,
    origin:'Bogota',
    destino:'Cali',
    hora:'15:40',
    precio:190000,
    duracion:'1h 00m,',
    },
    {
    id:3,
    origin:'Bogota',
    destino:'Cartagena',
    hora:'7:30',
    precio:800000,
    duracion:'2h 05m,',
    },
    {
    id:4,
    origin:'Bogota',
    destino:'Barranquilla',
    hora:'16:20',
    precio:320000,
    duracion:'1h 30m,',
    }
  ]
}
