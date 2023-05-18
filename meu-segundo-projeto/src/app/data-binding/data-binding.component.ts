import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  protected nome: string;
  protected idade: number;

  constructor() {
    this.nome = 'Arthur';
    this.idade = 19;
  }
}
