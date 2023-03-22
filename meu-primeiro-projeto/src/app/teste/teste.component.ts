import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})

export class TesteComponent {
  public teste: string;
  constructor () { 
    this.teste = '';
  }
  ngOnInit() {
    this.teste = 'O teste está funcionando';
  }
}
