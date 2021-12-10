import { Component } from "@angular/core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// component declarations
@Component({
  selector: "app-social",
  template: `<section class="social-outer bg-blue-dark text-center">
    <div class="social-inner">
      <fa-icon [icon]="faFacebookF" class="social-icon"></fa-icon>
      <fa-icon [icon]="faInstagram" class="social-icon"></fa-icon>
      <fa-icon [icon]="faPinterest" class="social-icon"></fa-icon>
      <fa-icon [icon]="faTwitter" class="social-icon"></fa-icon>
      <fa-icon [icon]="faYoutube" class="social-icon"></fa-icon>
      <fa-icon [icon]="faLinkedinIn" class="social-icon"></fa-icon>
    </div>
  </section>`,
  styleUrls: ["./social.component.scss"],
})
// export component
export class SocialComponent {
  // fontawesome icons
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faPinterest = faPinterest;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;
}
