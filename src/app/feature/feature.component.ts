import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "../contentful.service";

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"],
})
export class FeatureComponent implements OnInit {
  images$ = this.contentfulService.getImages();
  constructor(private contentfulService: ContentfulService) {}
  ngOnInit() {}
}
