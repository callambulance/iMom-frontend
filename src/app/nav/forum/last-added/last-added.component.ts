import {Component, Input, OnInit} from '@angular/core';
import {ForumQuestion} from '../model/forumQuestion';

@Component({
  selector: 'app-last-added',
  templateUrl: './last-added.component.html',
  styleUrls: ['./last-added.component.scss']
})
export class LastAddedComponent implements OnInit {
  @Input() lastAddedQuestion?: ForumQuestion[];

  constructor() { }

  ngOnInit(): void {
  }

}
