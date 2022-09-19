import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  message: string;

  constructor(private authenticationService: AuthenticationService) {
    this.message = '';
  }

  ngOnInit(): void {
    this.authenticationService.receiveMessage().subscribe((data) => {
      this.message = data;
    });
  }
}
