import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import { ContentfulService } from "./contentful.service";
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from "@angular/common";
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

  pageYoffset: number;

  constructor(private contentfulService: ContentfulService, private scroll: ViewportScroller) {}

  // scroll top top fucntion
  // runs every page route
  // onActivate(event) {
  //   window.scrollTo(0, 0);
  // }

//   @HostListener('window:scroll', ['$event']) onScroll(event){
//     this.pageYoffset = window.pageYOffset;
//  }
//  scrollToTop(){
//   this.scroll.scrollToPosition([0,0]);
// }
//   onActivate(event) {
//     window.scroll(0,0);
//     //or document.body.scrollTop = 0;
//     //or document.querySelector('body').scrollTo(0,0)
// }
  ngOnInit() {   
//        this.router.events.subscribe((event) => {
//     if (!(event instanceof NavigationEnd)) {
//         return;
//     }
//     window.scrollTo(0, 0)
// });
}
}
