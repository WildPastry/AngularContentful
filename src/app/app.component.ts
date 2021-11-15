import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ContentfulService } from "./contentful.service";
import { Router, NavigationEnd } from "@angular/router";
// component declarations
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
// export component
export class AppComponent implements OnInit {
  // child element
  @ViewChild("scrollAnchor", { static: false }) scrollAnchor: ElementRef;

  // contentfulService
  images$ = this.contentfulService.getImages();

  // constructor - add contentfulService and router
  constructor(
    private contentfulService: ContentfulService,
    public router: Router
  ) {
    // scroll to child element on route change
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.scrollAnchor.nativeElement.scrollIntoView();
      }
    });
  }

  ngOnInit() {
    console.log("ngOnInit AppComponent");
  }
}
