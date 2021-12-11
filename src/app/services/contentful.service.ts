import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContentfulService {

  // configuration for contentful
  private CONFIG = {
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken,
    contentTypeIds: {
      blogPost: 'blogPost',
      featureImage: 'featureImage'
    },
  };

  // create client for contentful
  private cdaClient = createClient({
    space: this.CONFIG.space,
    accessToken: this.CONFIG.accessToken
  });

  // functions inside constructor
  constructor() {
    this.getPosts();
    this.getImages();
  }

  // get all posts
  getPosts(query?: object): any {
    return from(
      this.cdaClient.getEntries({
        ...Object,
        content_type: this.CONFIG.contentTypeIds.blogPost,
        query
      })
    ).pipe(map(posts => posts.items));
  }

  // get individual post
  getPost(id: string): any {
    return from(this.cdaClient.getEntry(id));
  }

  // get all images
  getImages(query?: object): any {
    return from(
      this.cdaClient.getEntries({
        ...Object,
        content_type: this.CONFIG.contentTypeIds.featureImage,
        query
      })
    ).pipe(map(images => images.items));
  }

}
