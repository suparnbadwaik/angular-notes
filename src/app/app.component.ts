import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-angular-app';

  isFavoriteChanged(isFavFromInnerComponent) {
    console.log(`isFavoriteChanged() called from app.component.ts : ${isFavFromInnerComponent}`);
  }
}
