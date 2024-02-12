import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { appState } from "src/app/Appstore/app.store";
import { setLoadingSpinner } from "src/app/Appstore/Shared/shared.action";
import { SignupStart } from "../State/auth.action";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  SignupForm: FormGroup;
  constructor(private store: Store<appState>) {}

  ngOnInit() {
    this.onloadForm();
  }

  onloadForm() {
    this.SignupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  SignUp() {
    console.log(this.SignupForm.value);
    if (!this.SignupForm.value) {
      return;
    }
    const email = this.SignupForm.value.email;
    const password = this.SignupForm.value.password;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(SignupStart({ email, password }));
  }
}
