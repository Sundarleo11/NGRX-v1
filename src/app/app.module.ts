import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./Counter/counter/counter.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./Counter/State/counter.reducer";
import { BrowserModule } from "@angular/platform-browser";
import { CustomInputComponent } from "./Counter/custom-input/custom-input.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, CounterComponent, CustomInputComponent],
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
