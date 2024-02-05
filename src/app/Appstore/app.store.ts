import { SharedState } from "./Shared/shared.state";
import { SHARED_STATE_NAME } from "./Shared/shared.selector";
import { SharedReducer } from "./Shared/shared.reducer";
import { AUTH_STATE } from "../auth/State/auth.selector";
import { AuthState } from "../auth/State/auth.state";
import { AuthReducer } from "../auth/State/auth.reducer";

export interface appState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE]: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE]: AuthReducer,
};
