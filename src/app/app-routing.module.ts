import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent
  },
  {
    path: 'posts',
    component: PostsPageComponent
  },
  {
    path: 'post-details/:id',
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}