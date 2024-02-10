//import { AuthService } from "./../../services/auth.service";
import { exhaustMap, map, catchError, tap, mergeMap } from "rxjs/operators";
import {
  autoLogin,
  loginStart,
  loginsuccess,
  SignupStart,
  signupsuccess,
} from "./auth.action";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";
import { Store } from "@ngrx/store";
import {
  setErrorMessage,
  setLoadingSpinner,
} from "src/app/Appstore/Shared/shared.action";
import { appState } from "src/app/Appstore/app.store";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<appState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ message: "" }));
            const user = this.authService.formatUser(data);
            this.authService.setUserInLocalStorage(user);
            return loginsuccess({ user });
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[loginsuccess, signupsuccess]),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: "" }));
          this.router.navigate(["/"]);
        })
      );
    },
    { dispatch: false }
  );

  /* signUpRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(signupsuccess),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: "" }));
          this.router.navigate(["/"]);
        })
      );
    },
    { dispatch: false }
  );
*/
  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SignupStart),
      exhaustMap((action) => {
        return this.authService.signUp(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: true }));
            const user = this.authService.formatUser(data);
            this.authService.setUserInLocalStorage(user);
            return signupsuccess({ user });
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  autoLogin$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(autoLogin),
        map((action) => {
          const user = this.authService.getUserFromLocalStroage();
          console.log(user);
        })
      );
    },
    { dispatch: false }
  );
}
