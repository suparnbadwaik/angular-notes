import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite: boolean;
  @Output() favoriteChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.isFavorite = !this.isFavorite;
    this.favoriteChanged.emit(this.isFavorite);
    console.log(`Is Favorite : ${this.isFavorite}`);
  }
}