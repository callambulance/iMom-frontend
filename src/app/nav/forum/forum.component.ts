import { Component, OnInit } from '@angular/core';
import {ForumQuestion} from './model/forumQuestion';
import {ForumService} from './service/forum.service';
import {MatDialog} from "@angular/material/dialog";
import {NewQuestionComponent} from "./new-question/new-question.component";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  forumQuestions: ForumQuestion[] = [];
  userQuestions: ForumQuestion[] = [];
  lastAddedQuestions: ForumQuestion[] = [];
  constructor(private forumService: ForumService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.forumService.getForumQuestions().subscribe(question => this.forumQuestions = question);
    this.forumService.getYourTopics().subscribe(question => this.userQuestions = question);
    this.forumService.getLastAddedQuestions().subscribe(lastQuestion => this.lastAddedQuestions = lastQuestion);
  }

  addQuestionDialog() {
    this.dialog.open(NewQuestionComponent,{width: '800px'})
  }
}


