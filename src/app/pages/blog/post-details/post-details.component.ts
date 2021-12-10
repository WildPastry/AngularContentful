import { Component } from "@angular/core";
import { ContentfulService } from "../../../services/contentful.service";
import { ActivatedRoute } from "@angular/router";
// component declarations
@Component({
  selector: "app-post-details",
  template: `<section class="container post-container mb-3">
  <div class="row">
    <div class="col-12">
      <ng-container *ngIf="post$ | async as p">
            <div class="mb-3">
              <img class="post-detail-img" src="{{ p.fields.image.fields.file.url }}" />
            </div>
            <h2 class="barlow-condensed">
              {{ p.fields.title }}
            </h2>
          <p class="source-sans">
            {{ p.fields.body }}
          </p>
        <button routerLink="/posts" routerLinkActive="active"
        class="btn btn-primary barlow-condensed">BACK</button>
      </ng-container>
    </div>
  </div>
</section>`,
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
