import { Component } from '@angular/core';

// Model
import { Investiments } from '../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
  public investiments: Investiments[] = [
    {
    'name': 'Itaú',
    'value': 100
    },
    {
    'name': 'Will',
    'value': 100
    },
    {
    'name': 'Nubank',
    'value': 100
    },
    {
    'name': 'Inter',
    'value': 100
    }
  ];

  constructor() { }
}
