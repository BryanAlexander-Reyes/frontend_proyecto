import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Card{
  imagen:string;
  texto:string;
  boton:string;
}
interface subSeccion{
  titulo:string;
  texto:string;
  imagen:string;
}

@Component({
  selector: 'app-contenido-dinamico',
  imports: [CommonModule],
  templateUrl: './contenido-dinamico.html',
  styleUrl: './contenido-dinamico.css',
})
export class ContenidoDinamicoComponet {
  cards:Card[]=[
    {
      imagen:'https://picsum.photos/id/1015/600/400',
      texto:'Conoce nuestros cursos de formacion',
      boton:'Ver cursos'
    },
    {
      imagen:'https://picsum.photos/id/1016/600/400',
      texto:'Aprende nuevas tecnologias de desarrollo',
      boton:'Mas informacion',
    },
    {
      imagen: 'https://picsum.photos/id/1018/600/400',
      texto:'Descubre nuestros programas de formación',
      boton:'Ver programas',
    },
    {
      imagen:'https://picsum.photos/id/1025/600/400',
      texto:'Conoce las oportunidades disponibles',
      boton:'Conocer mas'
    },
    {
      imagen:'https://picsum.photos/id/1035/600/400',
      texto:'Explora nuestros recursos educativos',
      boton:'Explorar'
    },
    {
      imagen:'https://picsum.photos/id/85/600/400',
      texto:'Explora nuestros recursos educativos',
      boton:'Explorar'
    },
    {
      imagen:'https://picsum.photos/id/10/600/400',
      texto:'Explora nuestros recursos educativos',
      boton:'Explorar'
    }
  ];

  subSecciones: subSeccion[]=[
    {
      titulo:'Formación Profesional',
      texto:'Encuentre los programas de formación diseñado para fortalecer tus conociminetos y habilidades',
      imagen:'https://picsum.photos/id/1043/600/400'
    },
    {
      titulo:'Tecnologia',
      texto:'Aprende sobre desarrollo de software, programacion, bases de datos, y nuevas tecnologo',
      imagen:'https://picsum.photos/id/180/800/500'
    },
    {
      titulo:'Innovacion',
      texto:'Conoce proyectos y herramientas orientadas a la innovacion y la transformación',
      imagen:'https://picsum.photos/id/48/800/500'
    }
  ];

  // obtimizar codigo con un if y que dependiendo haga algo diferebte
  ejecutarAccion(card:Card):void{
    alert(`seleccionaste:${card.boton}`)
  }

}
