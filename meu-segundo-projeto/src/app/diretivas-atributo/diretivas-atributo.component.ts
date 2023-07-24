import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributo',
  templateUrl: './diretivas-atributo.component.html',
  styleUrls: ['./diretivas-atributo.component.scss']
})
export class DiretivasAtributoComponent {
  public valor: boolean;
  public widthValue: string;
  public heightValue: string;

  constructor() {
    this.valor = true;
    this.widthValue = '280px';
    this.heightValue = '20px';
  }

  ngOnInit() {
    setInterval(() => {
      if(this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if(this.heightValue == '20px') {
        this.heightValue = '50px';
      } else {
        this.heightValue = '20px';
      }
    },2000);
  }
}
