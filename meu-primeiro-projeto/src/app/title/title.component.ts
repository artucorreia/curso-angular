import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  public title: string;

  constructor() {
    this.title = 'Bem-vindo';
  } 

  ngOnDestroy(): void {
    console.log('componente destruído');
  }
}
