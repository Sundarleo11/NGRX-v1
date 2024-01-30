import { createReducer, on } from "@ngrx/store";
import {
  custom_input,
  decrement,
  increment,
  Reset,
  change_courseName,
} from "./counter.action";
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
  }),

  // custom-input
  on(custom_input, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),

  //change course Name
  on(change_courseName, (state, action) => {
    console.log(action);
    return {
      ...state,
      courseName: "Java",
      //counter: state.counter + action.value,
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
