import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public LoginForm: FormGroup;

  constructor() {}

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
    console.log(this.LoginForm);
  }
}
