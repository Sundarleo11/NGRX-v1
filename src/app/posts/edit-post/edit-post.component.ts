import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { appState } from "src/app/Appstore/app.store";
import { Post } from "src/app/model/posts.model";
import { updatePost } from "../State/posts.action";
import { getPostById } from "../State/posts.selector";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"],
})
export class EditPostComponent implements OnInit {
  post: Post;
  postDetails$: Observable<Post>;
  postForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private store: Store<appState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.onload();
  }

  private onload() {
    this.route.paramMap.subscribe((param) => {
      const id = param.get("id");

      this.store.select(getPostById, { id }).subscribe((data) => {
        this.post = data;
        this.createForm();
      });
    });
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),

      decription: new FormControl(this.post.decription, [
        Validators.required,
        Validators.minLength(25),
      ]),
    });
  }

  onUpdate() {
    console.log(this.postForm);

    const title = this.postForm.value.title;
    const decription = this.postForm.value.decription;

    const post: Post = {
      id: this.post.id,
      title,
      decription,
    };

    this.store.dispatch(updatePost({ post }));
    this.router.navigate(["posts"]);
  }
}
