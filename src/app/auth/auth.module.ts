import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./State/auth_effects";
import { SignupComponent } from "./signup/signup.component";
const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", redirectTo: "login" },
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupComponent },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature(),
    //StoreModule.forFeature(AUTH_STATE, AuthReducer),
  ],
})
export class AuthModule {}
