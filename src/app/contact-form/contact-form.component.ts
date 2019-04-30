import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [];

  constructor() { }

  ngOnInit() {
    this.loadContactMethods();
  }

  loadContactMethods() {
    this.contactMethods = [
      {id: 1, name: 'Email' },
      {id: 2, name: 'Facebook' },
      {id: 3, name: 'Instagram' },
      {id: 4, name: 'Twitter' }
    ];
  }

  log(fName) { console.log(fName); }

  submit(f) { 
    console.log(f); 
    console.log(f.value);
    console.log(f.valid);
  }
}