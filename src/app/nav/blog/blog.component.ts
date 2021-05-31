import {Component, Inject, OnInit} from '@angular/core';
import {BlogPost} from '../../models/blog-post.object';
import {BlogService} from './service/blog.service';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  topic!: BlogPost;
  blogPosts!: BlogPost[];

  categories = ['Mom', 'Dad', 'Child', 'Home'];

  categorySelected = '';

  constructor(private blogService: BlogService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.blogService.getTopicOfTheDay().subscribe(topic => this.topic = topic);
    this.blogService.getBlogPosts().subscribe(blogPosts => this.blogPosts = blogPosts);
  }

  selected(chip: string) {
    this.categorySelected = chip;
  }

  openTopic(topic: BlogPost) {
    const dialogRef = this.dialog.open(BlogArticleDialog, {
      width: '800px',
      data: {
        articleTitle: topic.title,
        articleText: topic.text,
        articleDate: topic.date
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Article was closed');
    });
  }
}

@Component({
  selector: 'blog-article-dialog',
  templateUrl: 'blog-article-dialog.html'
})
export class BlogArticleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
