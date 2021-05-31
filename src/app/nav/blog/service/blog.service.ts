import { Injectable } from '@angular/core';
import {WebRequestService} from '../../../web-request.service';
import {Observable} from 'rxjs';
import {ForumQuestion} from '../../forum/model/forumQuestion';
import {BlogPost} from '../../../models/blog-post.object';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  readonly ROOT_URL;

  constructor(private webRequestService: WebRequestService) {
    this.ROOT_URL = 'blog/articles';
  }

  getBlogPosts(): Observable<BlogPost[]>  {
    return this.webRequestService.get(this.ROOT_URL);
  }

  getBlogPostById(id: string): Observable<BlogPost> {
    return this.webRequestService.get('blog/article' + '/' + id);
  }

  getTopicOfTheDay(): Observable<BlogPost> {
    return  this.webRequestService.get('blog/article-of-the-day');
  }

  getBlogPostsByCategory(category: string): Observable<BlogPost[]> {
    return this.webRequestService.get(this.ROOT_URL + '/' + category);
  }
}
