import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {
  condition: boolean;
  conditionClick: boolean;
  people: {name: string, age: number}[];
  newName: string;
  newAge: number;
  result: number;

  constructor() {
    this.condition = true;
    this.conditionClick = true;
    this.newName = '';
    this.newAge = 0;
    this.people = [
      {
        name: 'Arthur', 
        age: 19
      }, 
      {
        name: 'Laís', 
        age: 18
      },
      {
        name: 'José', 
        age: 21
      }
    ];
    this.result = 5;
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

  onClick(): boolean {
    if(this.conditionClick) {
      return this.conditionClick = false;
    } else {
      return this.conditionClick = true;
    }
  }

  addPerson(): number {
    return this.people.push({name: this.newName, age: this.newAge});
  }

  deletePerson(indexPerson: number): {}[] {
    return this.people.splice(indexPerson, 1);
  }
}