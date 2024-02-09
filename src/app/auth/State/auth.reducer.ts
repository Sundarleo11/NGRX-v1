import { createReducer, on } from "@ngrx/store";
import { initialState } from "./auth.state";
import { loginsuccess } from "./auth.action";

const _authReducer = createReducer(
  initialState,

  on(loginsuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  })
);

export function AuthReducer(state, action) {
  return _authReducer(state, action);
}