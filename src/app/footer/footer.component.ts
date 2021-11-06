import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  title = "ANGULAR CMS";
  subTitle = "tagline";
  currentDate = new Date().getFullYear();
  copyRight =
    "Copyright © " + this.currentDate + " ANGULAR CMS All Rights Reserved";
  constructor() {}

  ngOnInit() {}
}
