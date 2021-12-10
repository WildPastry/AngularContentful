import { Component, OnInit } from "@angular/core";
// component declarations
@Component({
  selector: "app-client-services",
  template: `<section class="container mb-5">
    <div class="client-services-outer">
      <div class="client-services-inner">
        <h2 class="barlow-condensed">{{clientService1}}</h2>
        <hr class="client-services-hr" width="1" />
        <p class="text-center">
          Cortina d'Ampezzo is a town in the heart of the southern (Dolomitic)
          Alps in the region of Veneto in northern Italy. Situated on the river
          Boite, in an alpine valley, it is a summer and winter sports resort.
        </p>
        <button class="btn btn-secondary barlow-condensed">LEARN MORE</button>
      </div>
      <div class="client-services-inner">
        <h2 class="barlow-condensed">{{clientService2}}</h2>
        <hr class="client-services-hr" width="1" />
        <p class="text-center">
          Cortina d'Ampezzo is a town in the heart of the southern (Dolomitic)
          Alps in the region of Veneto in northern Italy. Situated on the river
          Boite, in an alpine valley, it is a summer and winter sports resort.
        </p>
        <button class="btn btn-secondary barlow-condensed">LEARN MORE</button>
      </div>
      <div class="client-services-inner">
        <h2 class="barlow-condensed">{{clientService3}}</h2>
        <hr class="client-services-hr" width="1" />
        <p class="text-center">
          Cortina d'Ampezzo is a town in the heart of the southern (Dolomitic)
          Alps in the region of Veneto in northern Italy. Situated on the river
          Boite, in an alpine valley, it is a summer and winter sports resort.
        </p>
        <button class="btn btn-secondary barlow-condensed">LEARN MORE</button>
      </div>
    </div>
  </section>`,
  styleUrls: ["./client-services.component.scss"],
})
// export component
export class ClientServicesComponent implements OnInit {
  clientService1: string;
  clientService2: string;
  clientService3: string;
  ngOnInit() {
    this.clientService1 = 'CLIENT SERVICE 1';
    this.clientService2 = 'CLIENT SERVICE 2';
    this.clientService3 = 'CLIENT SERVICE 3';
  }
}