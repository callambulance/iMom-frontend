import {Component, Input, OnInit} from '@angular/core';
import {ForumQuestion} from '../model/forumQuestion';

@Component({
  selector: 'app-user-topics',
  templateUrl: './user-topics.component.html',
  styleUrls: ['./user-topics.component.scss']
})
export class UserTopicsComponent implements OnInit {
  @Input() userQuestions?: ForumQuestion[];

  constructor() { }

  ngOnInit(): void {
  }

}
