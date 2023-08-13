import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  @Output() public sharedDados = new EventEmitter<{name: string, age: number}>();

  list: {name: string, age: number}[] = [
    {name: 'Arthur', age: 19},
    {name: 'Laís', age: 19},
    {name: 'Josias', age: 58}
  ]
  constructor() { }
  getDados(index: number): void {
    this.sharedDados.emit(this.list[index]);
  }
}
