import { Component } from "@angular/core";
// component declarations
@Component({
  selector: "app-about",
  template: `<section class="container-fluid mb-5 p-0">
      <div class="d-flex align-items-center about-feature"></div>
    </section>
    <section class="container mb-5">
      <div class="about-outer">
        <div class="about-img"></div>
        <div class="about-inner">
          <h2 class="birthstone-bounce text-blue-dark">This is my name!</h2>
          <h5 class="barlow-condensed text-blue-dark">
            Green is associated with the east, with sunrise, and with life and
            growth
          </h5>
          <p class="text-blue-dark">
            Cortina d'Ampezzo is a town in the heart of the southern (Dolomitic)
            Alps in the region of Veneto in northern Italy. Situated on the
            river Boite, in an alpine valley, it is a summer and winter sports
            resort.
          </p>
          <p class="text-blue-dark">
            Cortina d'Ampezzo is a town in the heart of the southern (Dolomitic)
            Alps in the region of Veneto in northern Italy. Situated on the
            river Boite, in an alpine valley, it is a summer and winter sports
            resort.
          </p>
        </div>
      </div>
      <div></div>
    </section>`,
  styleUrls: ["./about.component.scss"],
})
// export component
export class AboutComponent {}
