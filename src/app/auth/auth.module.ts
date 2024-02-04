import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthReducer } from "./State/auth.reducer";
import { StoreModule } from "@ngrx/store";
import { AUTH_STATE } from "./State/auth.selector";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./State/auth_effects";
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
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE, AuthReducer),
  ],
})
export class AuthModule {}
