import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { appState } from "src/app/Appstore/app.store";
import { Post } from "src/app/model/posts.model";
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
  constructor(private router: ActivatedRoute, private store: Store<appState>) {}

  ngOnInit() {
    this.onload();
  }

  private onload() {
    this.router.paramMap.subscribe((param) => {
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
        Validators.maxLength(6),
      ]),

      decription: new FormControl(this.post.decription, [
        Validators.required,
        Validators.maxLength(10),
      ]),
    });
  }
}
