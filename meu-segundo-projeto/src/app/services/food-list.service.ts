import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Event } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from '../module/food';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  
  public emitEvent = new EventEmitter();

  private url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { } 

  public foodList(): Observable<Food[]> { 
    return this.http.get<Food[]>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    );
  }

  public addNewFood(foodName: string, foodPrice: number): Observable<Food> {
    return this.http.post<Food>(`${this.url}list-food`, {
      name: foodName,
      price: foodPrice
    }).pipe(
      res => res,
      error => error
    );
  }

  public editFood(food: Food): Observable<Food> {
    return this.http.put<Food>(`${this.url}list-food/${food.id}`, {
      name: food.name, 
      price: food.price
    }).pipe(
      res => res,
      error => error
    );
  }

  public deleteFood(id: number): Observable<Food> {
    return this.http.delete<Food>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    );
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}