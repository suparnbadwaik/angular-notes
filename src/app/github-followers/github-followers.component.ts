import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followerList: {};
  constructor(private router: Router) { }

  ngOnInit() {
    this.followerList = [
      { id: 1, name:'Captain America' },
      { id: 2, name:'Iron Man' },
      { id: 3, name:'Thor' },
      { id: 4, name:'Thanos' }
    ];
    console.log(this.followerList[0].name);
  }

  submit() {
    console.log('Submit button clicked');
    // this.router.navigate(['/posts']);   // redirect to post
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
