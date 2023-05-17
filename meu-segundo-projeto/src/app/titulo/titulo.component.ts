import { Component } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent {
  titulo: string;
  subtitulo: string;
  // disabledButton: boolean;

  constructor() {
    this.titulo = 'Título';
    this.subtitulo = 'Subítulo';
    // this.disabledButton = false;
  }

  // sumir(): void {
  //   console.log(this.disabledButton)
  //   this.disabledButton = true;
  //   console.log(this.disabledButton)
  // }
}
