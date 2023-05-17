import { Component } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent {
  titulo: string;
  subtitulo: string;

  constructor() {
    this.titulo = 'Título';
    this.subtitulo = 'Subítulo';
  }
}
