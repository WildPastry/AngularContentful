import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [AppComponent, PostsPageComponent, PostDetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
