import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { NotfoundComponent } from "./auth/notfound/notfound.component";
import { PasswordResetComponent } from "./auth/password-reset/password-reset.component";

import { RoutingComponents } from "./app-routing.module";
import { ApplicationComponent } from "./application/application.component";

import { AuthenticationService } from "./core/authentication.service";
import { NgChartsModule } from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";
import { OAuthModule } from "angular-oauth2-oidc";
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    NotfoundComponent,
    PasswordResetComponent,
    ApplicationComponent,
    RoutingComponents,
  ],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule, HttpClientModule, OAuthModule.forRoot()],
  providers: [
    AuthenticationService,
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
