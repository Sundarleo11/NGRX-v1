import { createAction, props } from "@ngrx/store";
import { User } from "src/app/model/user.model";
export const LOGIN_START = "[auth page] login start";
export const SIGNUP_START = "[auth page] signup start";
export const LOGIN_SUCCESS = "[auth page] login success";
export const SIGNUP_SUCCESS = "[auth page] signup success";
export const LOGIN_FAIL = "[auth page] login fail";

export const AUTO_LOGIN_ACTION = "[auth page] auto login";

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginsuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);

export const SignupStart = createAction(
  SIGNUP_START,
  props<{ email: string; password: string }>()
);

export const signupsuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ user: User }>()
);

export const autoLogin = createAction(AUTO_LOGIN_ACTION);
