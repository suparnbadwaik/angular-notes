import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-angular-app';

  /* Favorite Component */
  isFavoriteChanged(isFavFromInnerComponent) {
    console.log(`isFavoriteChanged() called from app.component.ts : ${isFavFromInnerComponent}`);
  }

  isNewFavoriteChanged(eventArgs) {
    console.log(`isNewFavoriteChanged() called from app.component.ts : ${eventArgs.newFav}`);
  }
  /* End Favorite Component */

  /* Like Component */
  tweet = {
    body: '...',
    likesCount : 10,
    isLiked: true
  }
}
