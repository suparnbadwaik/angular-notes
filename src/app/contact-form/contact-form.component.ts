import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(fName) { console.log(fName); }

  submit(f) { 
    console.log(f); 
    console.log(f.value);
    console.log(f.valid);
  }
}