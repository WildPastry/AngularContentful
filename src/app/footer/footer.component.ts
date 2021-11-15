import { Component } from "@angular/core";
// component declarations
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
// export component
export class FooterComponent {
  // title, subtitle, date and copyright
  title = "ANGULAR CMS";
  subTitle = "the tagline";
  currentDate = new Date().getFullYear();
  copyRight = "Copyright © " + 
  this.currentDate + " ANGULAR CMS All Rights Reserved";
}
