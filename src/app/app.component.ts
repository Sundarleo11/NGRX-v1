import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { appState } from "./Appstore/app.store";
import { getErrorMessage, getLoading } from "./Appstore/Shared/shared.selector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ngrx-v";
  showLoading: Observable<boolean>;
  errorMessage: Observable<string>;

  constructor(private store: Store<appState>) {}

  ngOnInit() {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
  }
}
