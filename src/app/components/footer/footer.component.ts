import { Component } from "@angular/core";
// component declarations
@Component({
  selector: "app-footer",
  template: `<section class="footer-outer bg-tan-dark pt-4">
    <div class="container">
      <footer class="footer-inner">
        <!-- navigation buttons -->
        <div class="btn-grid">
          <div class="mb-2 me-2">
            <button
              routerLink=""
              routerLinkActive="active"
              class="btn btn-secondary w-100 barlow-condensed">
              HOME
            </button>
          </div>
          <div class="mb-2">
            <button
              routerLink="about"
              routerLinkActive="active"
              class="btn btn-secondary w-100 barlow-condensed">
              ABOUT
            </button>
          </div>
          <div class="me-2">
            <button
              routerLink="/posts"
              routerLinkActive="active"
              class="btn btn-secondary w-100 barlow-condensed">
              BLOG
            </button>
          </div>
          <div>
            <button
              routerLink="contact"
              routerLinkActive="active"
              class="btn btn-secondary w-100 barlow-condensed">
              CONTACT
            </button>
          </div>
        </div>
        <!-- footer title -->
        <div
          routerLink=""
          routerLinkActive="active"
          class="text-blue-dark cursor-pointer position-relative footer-title">
          <h1 class="barlow-condensed">
            {{ title }}
          </h1>
          <h3 class="birthstone-bounce footer-sub-title">
            {{ subTitle }}
          </h3>
        </div>
        <!-- book a consultation -->
        <div class="text-center footer-consultation">
          <h3 class="birthstone-bounce">Book a call</h3>
          <button class="btn btn-primary barlow-condensed">
            FREE CONSULTATION
          </button>
        </div>
      </footer>
      <hr width="1" />
      <div class="text-center text-blue-dark copyright mt-2">
        <p class="mb-0">
          <small>{{ copyRight }}</small>
        </p>
        <p>
          <small
            >Website by Mike Parker • Photos by Hautestock • Powered by Angular
            & Contentful</small
          >
        </p>
      </div>
    </div>
  </section>`,
  styleUrls: ["./footer.component.scss"],
})
// export component
export class FooterComponent {
  // title, subtitle, date and copyright
  title = "ANGULAR CMS";
  subTitle = "the tagline";
  currentDate = new Date().getFullYear();
  copyRight =
    "Copyright © " + this.currentDate + " ANGULAR CMS All Rights Reserved";
}
