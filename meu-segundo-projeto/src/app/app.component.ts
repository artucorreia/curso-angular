import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public value = 0;
  public getDados: {name: string, age: number} | undefined;

  constructor() { }

  addInValue(): number { return this.value++; }
  setDados(event: {name: string, age: number}) {
    this.getDados = event;
  }
}
