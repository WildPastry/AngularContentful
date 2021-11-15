import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "../contentful.service";

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"],
})

export class FeatureComponent implements OnInit {
  styleObject(): Object {
    return { height: "500px" };
  }
  
  images$ = this.contentfulService.getImages();

  constructor(private contentfulService: ContentfulService) {
    // console.log(this.images$, this.styleObject)
  }
  ngOnInit() {}
}
