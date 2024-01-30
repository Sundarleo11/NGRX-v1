import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./Counter/counter/counter.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./Counter/State/counter.reducer";
import { BrowserModule } from "@angular/platform-browser";
import { CustomInputComponent } from "./Counter/custom-input/custom-input.component";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, CustomInputComponent, HomeComponent, HeaderComponent, PostsListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
