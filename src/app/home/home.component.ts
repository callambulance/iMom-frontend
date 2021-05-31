import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ForumQuestion} from '../nav/forum/model/forumQuestion';
import {BlogPost} from '../models/blog-post.object';
import {BlogService} from '../nav/blog/service/blog.service';
import {FoodService} from '../nav/food/service/food.service';
import {Food} from '../nav/food/model/food';
import {HomeService} from './service/home.service';
import {PregnancyInfo} from '../models/pregnancyInfo';
import {Note} from '../models/note.object';
import {Contraction} from "../models/contraction";
import {LoginPageComponent} from "../login-page/login-page.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogPosts: BlogPost[] = [];
  foodList: Food[] = [];
  kicksCount!: number;
  countContractions!: number;
  lastContraction!: Contraction;
  userNotes: Note[] = [];

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return {
          columns: 1,
          welcome: {cols: 1, rows: 1},
          notes: {cols: 1, rows: 1},
          card4: {cols: 1, rows: 2},
          calendar: {cols: 1, rows: 2},
          forum: {cols: 1, rows: 2},
          blog: {cols: 1, rows: 2},
          food: {cols: 1, rows: 1}
        };
      }
      return {
        columns: 3,
        welcome: {cols: 2, rows: 1},
        notes: {cols: 1, rows: 1},
        card4: {cols: 1, rows: 1},
        calendar: {cols: 1, rows: 2},
        forum: {cols: 1, rows: 1},
        blog: {cols: 1, rows: 1},
        food: {cols: 1, rows: 1}
      };
    })
  );


  constructor(private breakpointObserver: BreakpointObserver, private blogService: BlogService, private foodService: FoodService,
              private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.getCountContractions('1').subscribe(countContractions => this.countContractions = countContractions);
    this.homeService.getLastContraction('1').subscribe(lastContraction => this.lastContraction = lastContraction);
    this.homeService.getKicksCount('1').subscribe(kicksCount => this.kicksCount = kicksCount);
    this.blogService.getBlogPosts().subscribe(blogPosts => this.blogPosts = blogPosts);
    this.foodService.getFood().subscribe(foodList => this.foodList = foodList);
    this.homeService.getUserNotes('1').subscribe(userNotes => this.userNotes = userNotes);
  }

  onChange(data: string) {
    this.ngOnInit();
  }
}
