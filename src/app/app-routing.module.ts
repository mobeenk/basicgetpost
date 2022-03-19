import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsViewerComponent } from './posts-viewer/posts-viewer.component';
import { TestApiComponent } from './test-api/test-api.component';

const routes: Routes = [
  {path: 'test', component: TestApiComponent},
  {path: 'posts', component: PostsViewerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
