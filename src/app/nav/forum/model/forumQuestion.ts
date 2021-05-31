import {Answer} from './answer';

export interface ForumQuestion {
  id: number;
  questionTitle: string;
  question: string;
  numberOfAnswers: number;
  likesQuantity: number;
  date: string;
  forumAnswer: Answer[];
}
