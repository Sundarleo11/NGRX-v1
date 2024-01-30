import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { custom_input } from "../State/counter.action";

@Component({
  selector: "app-custom-input",
  templateUrl: "./custom-input.component.html",
  styleUrls: ["./custom-input.component.css"],
})
export class CustomInputComponent implements OnInit {
  value: number;
  constructor(private store: Store<{ value: number }>) {}

  ngOnInit() {}

  addCount() {
    this.store.dispatch(custom_input({ value: +this.value }));
    //console.log(this.value);
  }
}
