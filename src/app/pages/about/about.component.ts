import { Component } from "@angular/core";
// component declarations
@Component({
  selector: "app-about",
  template: `<section class="container-fluid mb-5 p-0">
  <div class="d-flex align-items-center about-feature">
  </div>
</section>
<section class="container mb-5">
  <h2 class="barlow-condensed">ABOUT</h2>
</section>`,
  styleUrls: ["./about.component.scss"],
})
// export component
export class AboutComponent {}
