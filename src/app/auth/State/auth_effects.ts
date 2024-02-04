//import { AuthService } from "./../../services/auth.service";
import { exhaustMap, map } from "rxjs/operators";
import { loginStart, loginsuccess } from "./auth.action";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            const user = this.authService.formatUser(data);
            return loginsuccess({ user });
          })
        );
      })
    );
  });
}
