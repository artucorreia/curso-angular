import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {
  
  public foodList: string[] = [];
  public newFood: string = 'qiwi';

  constructor(private foodListService: FoodListService) {}

  ngOnInit() {
    this.foodList = this.foodListService.foodList();
  }

  // addNewFood(newFood: string) {
    // this.foodList = this.foodListService.addNewFood(newFood);
  // }
}
