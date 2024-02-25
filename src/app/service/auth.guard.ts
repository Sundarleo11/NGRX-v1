import { exhaustMap, map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { isAuthenticate } from "../auth/State/auth.selector";
import { appState } from "../Appstore/app.store";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private store: Store<appState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.select(isAuthenticate).pipe(
      map((authenticate) => {
        if (!authenticate) {
          return this.router.createUrlTree(["auth"]);
        }
        return true;
      })
    );
  }
}
