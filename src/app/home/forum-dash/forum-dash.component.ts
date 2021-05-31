import { Component, OnInit } from '@angular/core';
import { ForumQuestion } from "../../nav/forum/model/forumQuestion";
import { ForumService } from "../../nav/forum/service/forum.service";

@Component({
  selector: 'app-forum-dash',
  templateUrl: './forum-dash.component.html',
  styleUrls: ['./forum-dash.component.scss']
})
export class ForumDashComponent implements OnInit {

  forumQuestions: ForumQuestion[] = [];
  userQuestions: ForumQuestion[] = [];
  lastAddedQuestions: ForumQuestion[] = [];
  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.forumService.getForumQuestions().subscribe(question => this.forumQuestions = question);
    this.forumService.getYourTopics().subscribe(question => this.userQuestions = question);
    this.forumService.getLastAddedQuestions().subscribe(lastQuestion => this.lastAddedQuestions = lastQuestion);
  }

}
