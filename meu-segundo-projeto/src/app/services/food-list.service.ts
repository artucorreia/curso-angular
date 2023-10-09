import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Event } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

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

  private url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public foodList(): Observable<FoodList[]> { 
    console.log(this.url + 'list-food')
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    )
  }

  public addNewFood(newFood: string): string[] | number { 
    this.foodListAlert(newFood);
    return this.list.push(newFood); 
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}