import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { reloadScripts } from '../../../helpers/helper';
import { SignupGoogleServiceService } from './signup-google-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private google: SignupGoogleServiceService, private route: ActivatedRoute,
    private router: Router) {
    // console.log(window.location.hash)
    let paramString = window.location.hash.split('#')[0];
    // console.log(paramString.includes('#state='));
    let queryString = window.location.hash.includes('#state=')

    // for (let pair of queryString.entries()) {
    //    console.log("Key is: " + pair[0]);
    //    console.log("Value is: " + pair[1]);
    // }
    console.log(queryString, "dddddddddd")

    if (queryString) {
      this.google.runGoogleSignin();
    }

    // if (this.isLoggedIn()){
    //   this.router.navigate(['/application']);
    // }

  }

  public sendMessage(message: string) {
    this.authenticationService.sendMessage(message);
  }

  public ngOnInit(): void {
    // reloadScripts()
    // console.log(window.location.href)

  }

  public googleLogin(): void {
    this.google.runGoogleSignin();
  }

  public isLoggedIn(): boolean {
    return this.google.isLoggedIn()
  }
}
