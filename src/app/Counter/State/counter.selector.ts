import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";
export const COUNTER_SELECTOR = "counter";
const getCounterState = createFeatureSelector<CounterState>(COUNTER_SELECTOR);

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getCourseName = createSelector(getCounterState, (state) => {
  return state.courseName;
});
