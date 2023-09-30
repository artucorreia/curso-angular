import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  
  private list: string[] = [
    'x-bacon',
    'feijão',
    'ovo'
  ];

  constructor() { }

  public foodList(): string[] { return this.list; }

  public addNewFood(newFood: string): string[] | number { return this.list.push(newFood); }
}