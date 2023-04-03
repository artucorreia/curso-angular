import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public valor: number;
  public destruir: boolean;
  
  constructor () {
    this.valor = 1;
    this.destruir = true;
  }

  add(): number {
    return this.valor++;
  }

  destruirComponente(): void {
    this.destruir = false;
  }
}
