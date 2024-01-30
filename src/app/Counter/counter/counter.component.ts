import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/internal/Observable";
import { decrement, increment, Reset } from "../State/counter.action";
import { CounterState } from "../State/counter.state";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent implements OnInit {
  // to destory unsubcribe
  counter$: Observable<{ counter: number }>;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {
    this.selectDataUsingObserable();
  }

  private selectDataUsingObserable() {
    this.counter$ = this.store.select("counter");
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
