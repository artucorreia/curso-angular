import { EventEmitter, Injectable } from '@angular/core';
import { Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  
  public emitEvent = new EventEmitter();

  private list: string[] = [
    'x-bacon',
    'feijão',
    'ovo'
  ];

  constructor() { }

  public foodList(): string[] { return this.list; }

  public addNewFood(newFood: string): string[] | number { 
    this.foodListAlert(newFood);
    return this.list.push(newFood); 
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}