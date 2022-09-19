import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://accounts.google.com',

  // strict discovery document disallows urls which not start with issuers url
  strictDiscoveryDocumentValidation: false,

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: '332058043199-voa0drfjd4ucjm0rr6rof0qmhius2uq4.apps.googleusercontent.com',

  // set the scope for the permissions the client should request
  scope: 'openid profile email https://www.googleapis.com/auth/gmail.readonly',

  showDebugInformation: true,
};

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginServiceService {

  constructor(private readonly oAuthService: OAuthService) {


  }

  public runGoogleSignin(){
    // confiure oauth2 service
    this.oAuthService.configure(authCodeFlowConfig);
    // manually configure a logout url, because googles discovery document does not provide it
    this.oAuthService.logoutUrl = "https://www.google.com/accounts/Logout";

    // loading the discovery document from google, which contains all relevant URL for
    // the OAuth flow, e.g. login url
    this.oAuthService.loadDiscoveryDocument().then( () => {
      // // This method just tries to parse the token(s) within the url when
      // // the auth-server redirects the user back to the web-app
      // // It doesn't send the user the the login page
      this.oAuthService.tryLoginImplicitFlow().then( () => {

        // when not logged in, redirecvt to google for login
        // else load user profile
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow()
        } else {
          this.oAuthService.loadUserProfile().then( (userProfile) => {
            console.log(JSON.stringify(userProfile))
            // this.userProfileSubject.next(userProfile as UserInfo)
          })
        }

      })
    });
}

}
