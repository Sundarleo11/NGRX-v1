import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { appState } from "src/app/Appstore/app.store";
import { loginStart } from "./State/auth.action";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public LoginForm: FormGroup;

  constructor(private store: Store<appState>) {}

  ngOnInit() {
    this.onloadForm();
  }

  onloadForm() {
    this.LoginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  private Login() {
    //console.log(this.LoginForm);
    //username:test@test.com
    //password:123456
    const email = this.LoginForm.value.email;
    const password = this.LoginForm.value.password;
    this.store.dispatch(loginStart({ email, password }));
  }
}
