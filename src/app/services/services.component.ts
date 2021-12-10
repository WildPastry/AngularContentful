import { Component, OnInit } from "@angular/core";
// component declarations
@Component({
  selector: "app-services",
  template: `<section class="container mb-5">
    <div class="services-outer">
      <div class="services-inner">
        <h2 class="barlow-condensed">{{service1}}</h2>
        <hr class="services-hr" width="1" />
        <p class="text-center">
          Cortina d'Ampezzo is a town in the heart of the southern (Dolomitic)
          Alps in the region of Veneto in northern Italy. Situated on the river
          Boite, in an alpine valley, it is a summer and winter sports resort.
        </p>
        <button class="btn btn-secondary barlow-condensed">LEARN MORE</button>
      </div>
      <div class="services-inner">
        <h2 class="barlow-condensed">{{service2}}</h2>
        <hr class="services-hr" width="1" />
        <p class="text-center">
          Cortina d'Ampezzo is a town in the heart of the southern (Dolomitic)
          Alps in the region of Veneto in northern Italy. Situated on the river
          Boite, in an alpine valley, it is a summer and winter sports resort.
        </p>
        <button class="btn btn-secondary barlow-condensed">LEARN MORE</button>
      </div>
      <div class="services-inner">
        <h2 class="barlow-condensed">{{service3}}</h2>
        <hr class="services-hr" width="1" />
        <p class="text-center">
          Cortina d'Ampezzo is a town in the heart of the southern (Dolomitic)
          Alps in the region of Veneto in northern Italy. Situated on the river
          Boite, in an alpine valley, it is a summer and winter sports resort.
        </p>
        <button class="btn btn-secondary barlow-condensed">LEARN MORE</button>
      </div>
    </div>
  </section>`,
  styleUrls: ["./services.component.scss"],
})
// export component
export class ServicesComponent implements OnInit {
  service1: string;
  service2: string;
  service3: string;
  ngOnInit() {
    this.service1 = 'SERVICE 1';
    this.service2 = 'SERVICE 2';
    this.service3 = 'SERVICE 3';
  }
}