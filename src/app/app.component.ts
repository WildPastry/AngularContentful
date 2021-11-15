import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import { ContentfulService } from "./contentful.service";
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {

  // [x: string]: any;

  @ViewChild('scrollAnchor', {static: false}) topScroll: ElementRef;

  // onNavigate(event): any {
  //   this.topScroll.nativeElement.scrollIntoView({ behavior: 'smooth' });
  // }
  
  // contentfulService
  images$ = this.contentfulService.getImages();

  // pageYoffset: number;
  // router: any;

  constructor(private contentfulService: ContentfulService, public router: Router) {

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        // console.log('NavigationEnd');
        // window.scrollTo(0, 0);

        // document.getElementById("scrollAnchor").scrollIntoView()
        this.topScroll.nativeElement.scrollIntoView()
        // setTimeout(function(){ window.scrollTo(0, 0) }, 3000);

        // setTimeout(function(){ document.getElementById("scrollAnchor").scrollIntoView() }, 1000);

        // console.log(this.router.config);
        /* Your code goes here on every router change */}
    });
  }

//   constructor(public router: Router) {
//     this.changeOfRoutes();

//     this.router.events
//         .filter(event => (event instanceof NavigationEnd))
//             .subscribe((routeData: any) => {
//                 if(routeData.urlAfterRedirects === '/') {
//                     this.showAfterLogin = true;
//                 }
//             });
// }

  // scroll top top fucntion
  // runs every page route
  // onActivate(event) {
  //   console.log('SCROLL TO TOP');
  //   window.scrollTo(0, 0);
  // }

  // constructor(private router: Router) {
  //   this.router.events.subscribe((ev) => {
  //     if (ev instanceof NavigationEnd) { /* Your code goes here on every router change */}
  //   });

//   app.run(['$transitions', function ($transitions) {
//     $transitions.onSuccess({}, function () {
//         document.body.scrollTop = document.documentElement.scrollTop = 0;
//     })
// }]);

//   $rootScope.$on('$stateChangeSuccess', function() {
//     document.body.scrollTop = document.documentElement.scrollTop = 0;
//  });
 
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
ngOnInit(){
  // this.router.events.subscribe(event =>{
  //    if (event instanceof NavigationStart){
  //       console.log(event.url)
  //       this.routerChangeMethod(event.url);
  //    }
  // })
}
//   ngOnInit() {   
// //        this.router.events.subscribe((event) => {
// //     if (!(event instanceof NavigationEnd)) {
// //         return;
// //     }
// //     window.scrollTo(0, 0)
// // });
// }
}
