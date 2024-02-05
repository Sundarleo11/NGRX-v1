import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { appState } from "src/app/Appstore/app.store";
import { isAuthenticate } from "src/app/auth/State/auth.selector";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isAuthenticate: Observable<boolean>;
  constructor(private store: Store<appState>) {}

  ngOnInit() {
    this.isAuthenticate = this.store.select(isAuthenticate);
    console.log("isAuth", this.isAuthenticate);
  }
}
