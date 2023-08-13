import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public getDados: {name: string, age: number} | undefined;

  constructor() { }

  setDados(event: {name: string, age: number}) {
    this.getDados = event;
  }
}
