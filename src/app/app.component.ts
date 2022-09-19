import { Component, OnInit } from "@angular/core";
import { GoogleLoginServiceService } from './google-login-service.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  constructor(private readonly google: GoogleLoginServiceService){

  }

  ngOnInit(): void {}


  public runGoogleSignin(){
    this.google.runGoogleSignin();
  }

}
