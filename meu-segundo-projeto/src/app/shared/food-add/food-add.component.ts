import { Component } from '@angular/core';

// Service
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {
  
  constructor(private foodListService: FoodListService) {}

  public addNewFood(foodName: string, foodPrice: string) {
    return this.foodListService.addNewFood(foodName, Number(foodPrice)).subscribe({
      next: res => console.log(res),
      error: error => console.log(error)
    });
  }
}