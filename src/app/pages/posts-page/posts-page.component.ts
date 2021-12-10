import { Component } from "@angular/core";
import { ContentfulService } from "../../services/contentful.service";
// component declarations
@Component({
  selector: "app-posts-page",
  template: `<section class="container-fluid mb-5 p-0">
      <div class="d-flex align-items-center blog-feature"></div>
    </section>
    <section class="container mt-5 mb-3">
      <div class="row">
        <div class="col-12">
          <ng-container *ngIf="posts$ | async as posts">
            <div *ngFor="let p of posts">
              <div class="d-flex mb-5">
                <img
                  class="post-img"
                  src="{{ p.fields.image.fields.file.url }}"/>
                <div class="d-flex">
                  <hr width="1" size="340" class="mx-4" />
                  <div>
                    <h2 class="barlow-condensed">
                      {{ p.fields.title }}
                    </h2>
                    <p class="source-sans">
                      {{ p.fields.body }}
                    </p>
                    <button
                      [routerLink]="['/post-details/', p.sys.id]"
                      routerLinkActive="active"
                      class="btn btn-primary barlow-condensed">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ng-container>
        </div>
      </div>
    </section>`,
  styleUrls: ["./posts-page.component.scss"],
})
// export component
export class PostsPageComponent {
  // contentfulService posts
  posts$ = this.contentfulService.getPosts();
  // constructor - add contentfulService
  constructor(private contentfulService: ContentfulService) {}
}
