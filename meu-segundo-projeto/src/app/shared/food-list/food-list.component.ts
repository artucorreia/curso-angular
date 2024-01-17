import { Component } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {
  
  public foodList: FoodList[] = [];

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

  public editFood(food: FoodList) {
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
      error: error => console.log(error)
    });
  }
}