import { Component } from '@angular/core';
// component declarations
@Component({
  selector: 'app-personal',
  template: `<section class="container-fluid mb-5 p-0">
  <div class="personal-outer">
    <div class="personal-img"></div>
    <div class="personal-inner">
      <h2 class="birthstone-bounce text-blue-dark">Name  is...</h2>
      <h5 class="barlow-condensed text-white">Green is associated with the east, with sunrise, and with life and growth</h5>
      <p class="text-blue-dark">Cortina d'Ampezzo is a town in the heart of the southern (Dolomitic) Alps in the region of Veneto in northern Italy. Situated on the river Boite, in an alpine valley, it is a summer and winter sports resort.</p>
      <button routerLink="contact" routerLinkActive="active" class="btn btn-primary barlow-condensed">CONTACT</button>
    </div>
  </div>
</section>`,
  styleUrls: ['./personal.component.scss']
})
// export component
export class PersonalComponent {}
