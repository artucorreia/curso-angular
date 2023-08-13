import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  list: {name: string, age: number}[] = [
    {name: 'Arthur', age: 19},
    {name: 'Laís', age: 19},
    {name: 'Josias', age: 58}
  ]
  constructor() { }
}
