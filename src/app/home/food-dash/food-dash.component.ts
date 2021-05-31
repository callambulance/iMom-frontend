import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from '../../models/blog-post.object';
import {Food} from '../../nav/food/model/food';

@Component({
  selector: 'app-food-dash',
  templateUrl: './food-dash.component.html',
  styleUrls: ['./food-dash.component.scss']
})
export class FoodDashComponent implements OnInit {

  @Input() foodList?: Food[];

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  meals = ['Breakfast', '2nd Breakfast', 'Lunch', 'Dinner', 'Supper'];

  daySelected = 'Monday';
  mealSelected = 'Breakfast';


  constructor() { }

  ngOnInit(): void {
  }

  selectDay(day: string) {
    this.daySelected = day;
    console.log(this.daySelected);
  }

  selectMeal(meal: string) {
    this.mealSelected = meal;
    console.log(this.mealSelected);
  }
}
