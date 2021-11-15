import { Component } from "@angular/core";
import { ContentfulService } from "../contentful.service";
// component declarations
@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"],
})
// export component
export class FeatureComponent {
  // styles for background images
  styleObject(): Object {
    return { height: "500px" };
  }
  // contentfulService images
  images$ = this.contentfulService.getImages();

  // constructor - add contentfulService
  constructor(private contentfulService: ContentfulService) {}
}
