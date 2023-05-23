import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {
  protected condition: boolean;
  protected conditionClick: boolean;

  constructor() {
    this.condition = true;
    this.conditionClick = true;
  }

  ngOnInit() {
    setInterval(() => {
      if(this.condition === true) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  onClick() {
    if(this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }
}
