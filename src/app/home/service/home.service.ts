import { Injectable } from '@angular/core';
import {WebRequestService} from '../../web-request.service';
import {Observable} from 'rxjs';
import {BlogPost} from '../../models/blog-post.object';
import {newQuestion} from '../../nav/forum/model/newQuestion';
import {PregnancyInfo} from '../../models/pregnancyInfo';
import {Note} from '../../models/note.object';
import {Contraction} from "../../models/contraction";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private webRequestService: WebRequestService) {
  }

  getUserNotes(userId: string): Observable<Note[]> {
    return this.webRequestService.get('diary/' + userId);
  }

  getKicksCount(userId: string): Observable<number> {
    return this.webRequestService.get('users/' + userId + '/kicks-count');
  }

  increaseKicksCount(userId: string): Observable<any> {
    return this.webRequestService.post('users/' + userId + '/increase-kicks', '');
  }

  postNewNote(note: Note, userId: string): Observable<any> {
    return this.webRequestService.post('diaries' + '?userId=' + userId, note);
  }

  deleteNote(noteId: string): Observable<any> {
    return this.webRequestService.delete('dairy/delete/' + noteId);
  }

  saveNewContraction(userId: string, contraction: Contraction ): Observable<any>  {
    return this.webRequestService.post('pregnancy-info/contractions' + '?userId=' + userId, contraction);
  }

  getCountContractions(userId: string): Observable<any>  {
    return this.webRequestService.get('pregnancy-info/count-contractions' + '?userId=' + userId);
  }

  getLastContraction(userId: string): Observable<any>  {
    return this.webRequestService.get('pregnancy-info/last-contraction' + '?userId=' + userId);
  }

}
