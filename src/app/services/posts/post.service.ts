import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private serviceUrl: string = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    
  }

  getPosts() {
    return this.http.get(this.serviceUrl);
  }

  createPosts(post: any) {
    return this.http.post(this.serviceUrl, JSON.stringify(post));
  }

  updatePosts(post: any) {
    return this.http.patch(this.serviceUrl + '/' + post.id, JSON.stringify({ isRead: true }));
  }
}