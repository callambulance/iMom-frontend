import {Component, Input, OnInit, Output} from '@angular/core';
import {ForumQuestion} from '../model/forumQuestion';
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-questions',
  templateUrl: './top-questions.component.html',
  styleUrls: ['./top-questions.component.scss']
})
export class TopQuestionsComponent implements OnInit {
  @Input() topQuestions: ForumQuestion[] = [];
  searchedQuestions: ForumQuestion[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(value: string) {
    if(this.searchedQuestions.length > 0){
      this.searchedQuestions.length = 0;
    }
      // console.log(value);
      if (this.topQuestions){
        for (const question of this.topQuestions){
          if (question.questionTitle.includes(value) || question.question.includes(value) ){
            this.searchedQuestions.push(question);
            // console.log(question.question);
            // console.log(question.questionTitle);
          }
        }
      }
      // this.router.navigate(['/searched-questions'], { state: { searched: this.searchedQuestions } });
    }
}
