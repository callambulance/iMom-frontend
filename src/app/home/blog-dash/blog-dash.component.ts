import {Component, Input, OnInit} from '@angular/core';
import { BlogPost } from 'src/app/models/blog-post.object';
import {ForumQuestion} from '../../nav/forum/model/forumQuestion';

@Component({
  selector: 'app-blog-dash',
  templateUrl: './blog-dash.component.html',
  styleUrls: ['./blog-dash.component.scss']
})
export class BlogDashComponent implements OnInit {

  @Input() blogPosts?: BlogPost[];

  categories = ['Mom', 'Dad', 'Child', 'Home'];

  categorySelected = '';

  constructor() { }

  ngOnInit(): void {
  }

  selected(chip: string) {
    this.categorySelected = chip;
  }
}
