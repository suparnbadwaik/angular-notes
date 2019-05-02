import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Self declared modules */
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/posts/post.service';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseComponent } from './contact-form/assignment/course/course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    TitleCasePipe,
    PostsComponent,
    PanelComponent,
    LikeComponent,
    ContactFormComponent,
    CourseComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    GithubProfileComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'followers/:userId',
        component: GithubProfileComponent
      },
      {
        path: 'followers/:userId/:userName',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
