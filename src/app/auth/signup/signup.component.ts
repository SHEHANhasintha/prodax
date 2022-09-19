import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';
import { reloadScripts } from '../../../helpers/helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  message: string;

  constructor(private authenticationService: AuthenticationService) {
    this.message = '';
  }

  ngOnInit(): void {
    // reloadScripts()
    this.authenticationService.receiveMessage().subscribe((data) => {
      this.message = data;
    });
  }

  public gotoLogin() {}

}
