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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  declarations: [AppComponent, PostsPageComponent, PostDetailsComponent, HeaderComponent, FeatureComponent, FooterComponent, SocialComponent, MainComponent, ServicesComponent, AboutComponent, ContactComponent, PersonalComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
