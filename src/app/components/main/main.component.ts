import { Component } from "@angular/core";
// component declarations
@Component({
  selector: "app-main",
  template: `
  <!-- feature component -->
  <app-feature></app-feature>
  <!-- services component -->
  <app-client-services></app-client-services>
  <!-- personal component -->
  <app-personal></app-personal>`,
  styleUrls: ["./main.component.scss"],
})
// export component
export class MainComponent {}
