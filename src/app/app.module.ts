import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./Counter/counter/counter.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./Counter/State/counter.reducer";
import { BrowserModule } from "@angular/platform-browser";
import { CustomInputComponent } from "./Counter/custom-input/custom-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { PostsListComponent } from "./posts/posts-list/posts-list.component";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { postsReducer } from "./posts/State/posts.reducer";
import { appReducer } from "./Appstore/app.store";
import { AddPostComponent } from "./posts/add-post/add-post.component";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CustomInputComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({ counter: counterReducer, posts: postsReducer }),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
