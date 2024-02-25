import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { appState } from "src/app/Appstore/app.store";
import { Post } from "src/app/model/posts.model";
import { deletePost, loadPosts } from "../State/posts.action";
import { getPosts } from "../State/posts.selector";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.css"],
})
export class PostsListComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(private store: Store<appState>) {}

  ngOnInit() {
    this.onload();
  }

  private onload() {
    this.posts = this.store.select(getPosts);
    this.store.dispatch(loadPosts());
  }

  private onDelete(id: String) {
    if (confirm("Are you sure want to delete the post")) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
