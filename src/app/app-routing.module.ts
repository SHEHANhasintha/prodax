import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { NotfoundComponent } from "./auth/notfound/notfound.component";
import { ApplicationComponent } from "./application/application.component";
import { AuthenticationGuard } from "./core/authentication.guard";
import { AppComponent } from "./app.component"
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  // { path: "state/:id", component: LoginComponent },
  {
    path: "application",
    loadChildren: () =>
      import("./application/lazy.module").then((x) => x.LazyModule),
    canActivate: [AuthenticationGuard],
  },

  { path: "**", component: AppComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const RoutingComponents = [
  SignupComponent,
  LoginComponent,
  ApplicationComponent,
];
