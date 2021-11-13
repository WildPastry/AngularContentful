import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ContentfulService } from "./contentful.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {

  // @ViewChild('topScrollAnchor', {static: false}) topScroll: ElementRef;

  // onNavigate(event): any {
  //   this.topScroll.nativeElement.scrollIntoView({ behavior: 'smooth' });
  // }
  
  // contentfulService
  images$ = this.contentfulService.getImages();
  constructor(private contentfulService: ContentfulService) {}

  // scroll top top fucntion
  // runs every page route
  // onActivate(event) {
  //   window.scrollTo(0, 0);
  // }

  ngOnInit() {window.scroll(0, 0)}
}
