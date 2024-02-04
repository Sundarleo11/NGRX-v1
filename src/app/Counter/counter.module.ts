import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterComponent } from "src/app/Counter/counter/counter.component";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { counterReducer } from "./State/counter.reducer";
import { COUNTER_SELECTOR } from "./State/counter.selector";

const routes: Routes = [
  {
    path: "",
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [CounterComponent, CustomInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_SELECTOR, counterReducer),
  ],
})
export class CounterModule {}
