import { Component } from "@angular/core";
// component declarations
@Component({
  selector: "app-header",
  template: `<section class="container mt-4 mb-1">
  <header class="header-outer">
    <!-- header nav 1st div -->
    <div class="header-buttons">
      <h5 routerLink="" routerLinkActive="active" class="cursor-pointer barlow-condensed">HOME</h5>
      <hr width="1" size="30" class="mx-4">
      <h5 routerLink="about" routerLinkActive="active" class="cursor-pointer barlow-condensed">ABOUT</h5>
    </div>
    <!-- header-title -->
    <div routerLink="" routerLinkActive="active" class="text-blue-dark cursor-pointer position-relative header-title">
      <h1 class="barlow-condensed">
        {{ title }}
      </h1>
      <h3 class="birthstone-bounce header-sub-title">
        {{ subTitle }}
      </h3>
    </div>
    <!-- header nav 2nd div -->
    <div class="header-buttons">
      <h5 routerLink="/posts" routerLinkActive="active" class="cursor-pointer barlow-condensed">BLOG</h5>
      <hr width="1" size="30" class="mx-4">
      <h5 routerLink="contact" routerLinkActive="active" class="cursor-pointer barlow-condensed">CONTACT</h5>
    </div>
  </header>
</section>`,
  styleUrls: ["./header.component.scss"],
})
// export component
export class HeaderComponent {
  // title and subtitles
  title = "ANGULAR CMS";
  subTitle = "the tagline";
}
