import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './nav/food/food.component';
import { HomeComponent } from "./home/home.component";
import { CalendarComponent } from './nav/calendar/calendar.component';
import { BlogComponent } from './nav/blog/blog.component';
import { ForumComponent } from './nav/forum/forum.component';
import {ForumQuestionComponent} from './nav/forum/forum-question/forum-question.component';
import {NewQuestionComponent} from './nav/forum/new-question/new-question.component';
import {NewTaskComponent} from './home/calendar-dash/new-task/new-task.component';
import {BlogArticleComponent} from './nav/blog/blog-article/blog-article.component';

import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuard} from './authGuard/authGuard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'food', component: FoodComponent, canActivate: [AuthGuard]},
  {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
  {path: 'blog', component: BlogComponent, canActivate: [AuthGuard]},
  {path: 'forum', component: ForumComponent, canActivate: [AuthGuard]},
  {path: 'forum-question/:id', component: ForumQuestionComponent, canActivate: [AuthGuard]},
  {path: 'blog-article/:id', component: BlogArticleComponent, canActivate: [AuthGuard]},
  {path: 'new-question', component: NewQuestionComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
