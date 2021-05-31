import {Component, OnInit} from '@angular/core';
import {BlogService} from '../service/blog.service';
import {BlogPost} from '../../../models/blog-post.object';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  article?: BlogPost;
  id: any;
  sub: any;

  constructor(private ActivatedRoute: ActivatedRoute,
              private router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
    this.sub = this.ActivatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      this.blogService.getBlogPostById(this.id).subscribe(article => this.article = article);
    });
  }
}
