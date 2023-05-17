import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo: string;
  arrayTest: string[];

  constructor() {
    this.titulo = 'testando';
    this.arrayTest = [];
  }

  add(): void {
    this.arrayTest.push('<app-test></app-test>');
    console.log('ok');
  }
}
