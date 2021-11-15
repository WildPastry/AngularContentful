import { Component } from "@angular/core";
// component declarations
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
// export component
export class HeaderComponent {
  // title and subtitles
  title = "ANGULAR CMS";
  subTitle = "the tagline";
}
