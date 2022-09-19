import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '332058043199-voa0drfjd4ucjm0rr6rof0qmhius2uq4.apps.googleusercontent.com',
  scope: 'openid profile email'
}

export interface UserInfo {
  info: {
    sub: string
    email: string,
    name: string,
    picture: string
  }
}

@Injectable({
  providedIn: 'root'
})

export class SignupGoogleServiceService {
  gmail = 'https://gmail.googleapis.com'

  userProfileSubject = new Subject<UserInfo>()

  constructor(private readonly oAuthService: OAuthService, private readonly httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {

      // if (this.isLoggedIn()){
      //   this.router.navigate(['/application']);
      // }

  }

  emails(userId: string): Observable<any> {
    return this.httpClient.get(`${this.gmail}/gmail/v1/users/${userId}/messages`, { headers: this.authHeader() })
  }

  getMail(userId: string, mailId: string): Observable<any> {
    return this.httpClient.get(`${this.gmail}/gmail/v1/users/${userId}/messages/${mailId}`, { headers: this.authHeader() })
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken()
  }

  signOut() {
    this.oAuthService.logOut()
  }

  private authHeader() : HttpHeaders {
    return new HttpHeaders ({
      'Authorization': `Bearer ${this.oAuthService.getAccessToken()}`
    })
  }

  public runGoogleSignin() : void {
    this.oAuthService.configure(oAuthConfig);
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
            console.log(userProfile)
            localStorage.setItem('userInfo', JSON.stringify(userProfile));
            this.userProfileSubject.next(userProfile as UserInfo)


          })
        }

      })
    });


  }


}
