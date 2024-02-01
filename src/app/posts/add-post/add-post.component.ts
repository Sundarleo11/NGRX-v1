import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"],
})
export class AddPostComponent implements OnInit {
  public postForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.onloadForm();
  }

  onloadForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),

      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(25),
      ]),
    });
  }

  showDescription() {
    const descriptionForm = this.postForm.get("description");
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors.required) {
        return "Description is required";
      }

      if (descriptionForm.errors.minlength) {
        return "Description should be minimum 25 characters";
      }
    }
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    console.log(this.postForm.value);
  }
}
