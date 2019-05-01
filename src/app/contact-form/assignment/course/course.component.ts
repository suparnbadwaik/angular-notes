import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseTypes = [];

  constructor() { }

  ngOnInit() {
    this.courseTypes = [
      { id: 1, type: 'Art'},
      { id: 2, type: 'Commerce'},
      { id: 3, type: 'Science'}
    ];
  }

}
