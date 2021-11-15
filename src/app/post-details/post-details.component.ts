import { Component } from "@angular/core";
import { ContentfulService } from "../contentful.service";
import { ActivatedRoute } from "@angular/router";
// component declarations
@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"],
})
// export component
export class PostDetailsComponent {

    // contentfulService posts and individual post id #s
  id = this.route.snapshot.paramMap.get("id");
  post$ = this.contentfulService.getPost(this.id);

    // constructor - add contentfulService and router
  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute
  ) {}
}
