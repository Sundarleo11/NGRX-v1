import { createReducer, on } from "@ngrx/store";
import { decrement, increment, Reset } from "./counter.action";
import { initialSate } from "./counter.state";

const _counterReducer = createReducer(
  initialSate,

  //increment
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),

  //decrement

  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),

  //reset
  on(Reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
