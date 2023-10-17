import { Component } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {
  
  public foodList: FoodList | any;

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    // this.foodListService.foodList().subscribe({
    //   next: res => this.foodList = res,
    //   error: error => console.log(error)
    // });
    this.foodListService.foodList().subscribe((foodList) => this.foodList = foodList);

    this.foodListService.emitEvent.subscribe({
      next: (res: string) => console.log(res)
    });
  }
}