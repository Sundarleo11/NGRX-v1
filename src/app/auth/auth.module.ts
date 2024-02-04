import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", redirectTo: "login" },
      { path: "login", component: LoginComponent },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
