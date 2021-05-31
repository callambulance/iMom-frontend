import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:8080';
  }

  get(url: string): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/${url}`);
  }

  // tslint:disable-next-line:ban-types typedef
  post(url: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${url}`, payload);
  }

  //
  // patch(url: string, payload: Object) {
  //   return this.http.patch(`${this.ROOT_URL}/${url}`, payload);
  // }
  //
  delete(url: string): Observable<any>{
    return this.http.delete(`${this.ROOT_URL}/${url}`);
  }

}
