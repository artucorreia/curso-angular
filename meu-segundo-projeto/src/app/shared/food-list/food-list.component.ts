import { Component } from '@angular/core';
import { Food } from 'src/app/module/food';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {
  
  public foodList: Food[] = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: foodList => this.foodList = foodList,
      error: error => console.log(error)
    });

    this.foodListService.emitEvent.subscribe({
      next: (res: string) => console.log(res)
    });
  }

  public editFood(food: Food) {
    return this.foodListService.editFood(food).subscribe({
      next: res => res,
      error: error => error
    });
}

  public deleteFood(id: number) {
    return this.foodListService.deleteFood(id).subscribe({
      next: res => {
        this.foodList = this.foodList.filter(
          food => {
            return id !== food.id
          }
        )
      },
      error: error => error
    });
  }
}