import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  protected nome: string;
  protected idade: number;
  protected imgSrc: string;
  protected imgAlt: string;
  protected buttonDisabled: boolean;

  constructor() {
    this.nome = 'Arthur';
    this.idade = 19;
    this.buttonDisabled = false;
    this.imgSrc = 'https://i.pinimg.com/564x/17/6e/9b/176e9b666a2461b8ed3fef458a64dbb7.jpg';
    this.imgAlt = 'Cenário Pixel Art';
  }

  onOff(): boolean {
    if (this.buttonDisabled) {
      return this.buttonDisabled = false;
    } else {
      return this.buttonDisabled = true;
    }
  }

}
