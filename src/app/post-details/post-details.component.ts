import { Component } from "@angular/core";
import { ContentfulService } from "../contentful.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"],
})
export class PostDetailsComponent {
  id = this.route.snapshot.paramMap.get("id");
  post$ = this.contentfulService.getPost(this.id);

  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute
  ) {}
}
