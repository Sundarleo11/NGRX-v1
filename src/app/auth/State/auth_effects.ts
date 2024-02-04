//import { AuthService } from "./../../services/auth.service";
import { exhaustMap, map } from "rxjs/operators";
import { loginStart, loginsuccess } from "./auth.action";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";
import { Store } from "@ngrx/store";
import { setLoadingSpinner } from "src/app/Appstore/Shared/shared.action";
import { appState } from "src/app/Appstore/app.store";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<appState>
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const user = this.authService.formatUser(data);
            return loginsuccess({ user });
          })
        );
      })
    );
  });
}
