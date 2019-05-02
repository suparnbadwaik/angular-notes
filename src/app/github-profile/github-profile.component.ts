import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    /*
      Inject activated route dependency and use the paramMap property to get all the parameters
      Since paramMap is of type Observable, we can use the subscribe method with it.
      We get the values passed in property of the name defined in the app module route.
    */
  }

  ngOnInit() {
    this.route
        .paramMap
        .subscribe(params => {
          console.log(params.keys);
          console.log(params);
          console.log(params.get('userId'));      // returns a string
          let id:number = +params.get('userId');  // technique in JS. Add `+` before string to work with number
        });
  }

}
