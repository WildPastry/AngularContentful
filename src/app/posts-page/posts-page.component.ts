import { Component } from "@angular/core";
import { ContentfulService } from "../contentful.service";
// component declarations
@Component({
  selector: "app-posts-page",
  templateUrl: "./posts-page.component.html",
  styleUrls: ["./posts-page.component.scss"],
})
// export component
export class PostsPageComponent {
  // contentfulService posts
  posts$ = this.contentfulService.getPosts();
  // constructor - add contentfulService
  constructor(private contentfulService: ContentfulService) {}
}
