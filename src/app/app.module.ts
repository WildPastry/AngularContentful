import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { HeaderComponent } from './header/header.component';
import { FeatureComponent } from './feature/feature.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [AppComponent, PostsPageComponent, PostDetailsComponent, HeaderComponent, FeatureComponent, FooterComponent, SocialComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
