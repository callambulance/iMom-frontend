import { Component, OnInit } from '@angular/core';
import {FoodService} from './service/food.service';
import {Food} from './model/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  meals = ['Breakfast', '2nd Breakfast', 'Lunch', 'Dinner', 'Supper'];

  daySelected = 'Monday';

  foodList?: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getFood().subscribe(foodList => this.foodList = foodList);
  }

  selectDay(day: string) {
    this.daySelected = day;
    console.log(this.daySelected);
  }

}
