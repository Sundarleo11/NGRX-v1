import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { decrement, increment, Reset } from "../State/counter.action";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent implements OnInit {
  counter: number;
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit() {
    this.store.select("counter").subscribe((data) => {
      this.counter = data.counter;
    });
  }

  OnIncrement() {
    this.store.dispatch(increment());
  }

  OnDecrement() {
    this.store.dispatch(decrement());
  }

  OnReset() {
    this.store.dispatch(Reset());
  }
}
