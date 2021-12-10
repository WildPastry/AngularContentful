import { Component } from "@angular/core";
import { ContentfulService } from "../../services/contentful.service";
// component declarations
@Component({
  selector: "app-feature",
  template: `<section class="container-fluid mb-5 p-0">
  <ng-container *ngIf="images$ | async as images">
    <div *ngFor="let i of images">
      <div class="d-flex align-items-center"
        [ngStyle]="{'background': 'url('+ i.fields.featureImage.fields.file.url + ')', 'height': '500px', 'background-position': 'center', 'background-repeat': 'no-repeat', 'background-size': 'cover'}">
        <div class="container">
          <div>
            <h1 class="birthstone-bounce">
              Welcome
            </h1>
            <h5 class="source-sans">You can get in touch by clicking the button below</h5>
            <hr width="1" />
          <button class="btn btn-primary barlow-condensed w-190">LET'S WORK TOGETHER</button></div>
        </div>
      </div>
    </div>
  </ng-container>
</section>`,
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
