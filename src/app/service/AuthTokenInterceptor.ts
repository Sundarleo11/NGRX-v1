import { exhaustMap, take } from "rxjs/operators";
import { getAuthToken } from "./../auth/state/auth.selector";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { appState } from "../Appstore/app.store";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<appState>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(getAuthToken).pipe(
      take(1),
      exhaustMap((token) => {
        if (!token) {
          return next.handle(req);
        }
        let modifiedReq = req.clone({
          params: req.params.append("auth", token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
