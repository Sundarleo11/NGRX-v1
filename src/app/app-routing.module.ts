import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CounterComponent } from "./Counter/counter/counter.component";
import { HomeComponent } from "./home/home.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { EditPostComponent } from "./posts/edit-post/edit-post.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "counter",
    loadChildren: () =>
      import("./Counter/counter.module").then((m) => m.CounterModule),
  },
  {
    path: "posts",
    loadChildren: () =>
      import("./posts/posts.module").then((m) => m.PostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
