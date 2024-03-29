import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducer } from "./Appstore/app.store";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { AuthEffects } from "./auth/State/auth_effects";

//import { counterReducer } from "./Counter/State/counter.reducer";
//import { postsReducer } from "./posts/State/posts.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //StoreModule.forRoot({ counter: counterReducer, posts: postsReducer }),
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
