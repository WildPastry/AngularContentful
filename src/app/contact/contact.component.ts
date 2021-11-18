import { Component } from "@angular/core";
// component declarations
@Component({
  selector: "app-contact",
  template: `<section class="container-fluid mb-5 p-0">
      <div class="d-flex align-items-center contact-feature"></div>
    </section>
    <section class="container mb-5">
      <h2 class="barlow-condensed">CONTACT</h2>
    </section>`,
  styleUrls: ["./contact.component.scss"],
})
// export component
export class ContactComponent {}
