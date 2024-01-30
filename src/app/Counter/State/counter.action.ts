import { createAction, props } from "@ngrx/store";

export const increment = createAction("[increment]");
export const decrement = createAction("[decrement]");
export const Reset = createAction("[reset]");

export const custom_input = createAction(
  "custom-input",
  props<{ value: number }>()
);
