import { Component } from "@angular/core";
// component declarations
@Component({
  selector: "app-main",
  template: `
  <!-- feature component -->
  <app-feature></app-feature>
  <!-- services component -->
  <app-services></app-services>
  <!-- personal component -->
  <app-personal></app-personal>`,
  styleUrls: ["./main.component.scss"],
})
// export component
export class MainComponent {}
