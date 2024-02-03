import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/internal/Observable";
import { decrement, increment, Reset } from "../State/counter.action";
import { getCounter, getCourseName } from "../State/counter.selector";
import { CounterState } from "../State/counter.state";
import { appState } from "src/app/Appstore/app.store";
@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent implements OnInit {
  // to destory unsubcribe
  counter$: Observable<number>;

  // to destory unsubcribe
  CourseName$: Observable<string>;

  //courseName: string;
  constructor(private store: Store<appState>) {}

  ngOnInit() {
    this.selectDataUsingObserable();
    this.selectedCourseName();
  }

  private selectDataUsingObserable() {
    this.counter$ = this.store.select(getCounter);
    console.log(this.counter$);
  }

  private selectedCourseName() {
    this.CourseName$ = this.store.select(getCourseName);
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
