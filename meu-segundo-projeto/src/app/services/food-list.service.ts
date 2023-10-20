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

  private url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public foodList(): Observable<FoodList[]> { 
    return this.http.get<FoodList[]>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    );
  }

  public addNewFood(newFood: string, priceNewFood: number): Observable<FoodList> { 
    return this.http.post<FoodList>(`${this.url}list-food`, {
      name: newFood,
      price: priceNewFood,
    }).pipe(
      res => res,
      error => error
    );
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}