import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const userJson = require('../../assets/user.json');

@Injectable({
  providedIn: 'root',
})
export class Mod2Service {
  userJson = userJson;

  user;

  posts;

  post;

  constructor(private http: HttpClient) {}

  loadUser(): void {
    this.http.get('assets/user.json').subscribe((data) => {
      this.user = data;
    });
  }

  loadPosts() {
    this.posts = this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  postPosts() {
    return this.http
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        })
      );
  }

  loadPost() {
    this.post = this.postPosts();
  }
}
