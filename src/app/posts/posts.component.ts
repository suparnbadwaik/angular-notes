import { PostService } from './../services/posts/post.service';
import { Component, OnInit } from '@angular/core';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.postService
    .getPosts()
    .subscribe(response => {
      this.posts = response.json();
    }, (error: Response) => {       //// Good but there is problem with violation of concerns
      console.log(error.status);
      if (error.status === 400) {
        //// your message
      } else {
        console.log(`Unexpected error occured`);
        console.log(error);
      }
    });
  }

  createPost(input: HTMLInputElement): void {
    console.log(input.value);
    let post: any = { title: input.value };
    this.postService
        .createPosts(post)
        .subscribe(response => {
          console.log(response.json());
          post.id = response.json().id;
          this.posts.splice(0, 0, post);
          input.value = '';
        });
  }

  updatePost(post: any): void {
    this.postService
        .updatePosts(post)
        .subscribe(response => {
          console.log(response.json());
        });
  }
}