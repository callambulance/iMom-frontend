import { Injectable } from '@angular/core';
import {WebRequestService} from '../../../web-request.service';
import {Observable} from 'rxjs';
import {ForumQuestion} from '../../forum/model/forumQuestion';
import {Food} from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  readonly ROOT_URL;

  constructor(private webRequestService: WebRequestService) {
    this.ROOT_URL = 'food';
  }

  getFood(): Observable<Food[]>  {
    return this.webRequestService.get(this.ROOT_URL);
  }
}
