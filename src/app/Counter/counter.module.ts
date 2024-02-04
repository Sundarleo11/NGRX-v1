import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CounterComponent } from "src/app/Counter/counter/counter.component";
import { CustomInputComponent } from "./custom-input/custom-input.component";

const routes: Routes = [
  {
    path: "",
    component: CounterComponent,
  },
];

@NgModule({
  declarations: [CounterComponent, CustomInputComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class CounterModule {}
