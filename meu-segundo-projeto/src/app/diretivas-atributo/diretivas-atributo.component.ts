import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributo',
  templateUrl: './diretivas-atributo.component.html',
  styleUrls: ['./diretivas-atributo.component.scss']
})
export class DiretivasAtributoComponent {
  public valor: boolean;
  public heightValue: string;
  public widthValue: string;
  public newName: string;
  public list: {name: string}[];

  constructor() {
    this.valor = true;
    this.heightValue = '60px';
    this.widthValue = '100px';
    this.newName = '';
    this.list = []
  }

  ngOnInit() {
    setInterval(() => {
      if(this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if(this.widthValue == '100px') {
        this.widthValue = '150px';
      } else {
        this.widthValue = '100px';
      }
    },2000);
  }

  addNewItem(name: string) {
    this.list.push({name: name});
    this.clearInput();
  }

  clearInput() { this.newName = ''; }
  
}
