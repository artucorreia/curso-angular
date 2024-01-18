import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  public foods: {name: string, price: number}[] = [
    {
      name: 'X-Salada', 
      price: 11
    },
    {
      name: 'X-Bacon', 
      price: 18
    },
    {
      name: 'X-Frango', 
      price: 15
    }
  ]

  constructor() { }

  public submitForm(form: NgForm) {
    console.log(form);
  }
}
