import { Injectable, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private abc = new BehaviorSubject<string>('added new sets');
  private isLoggedin = new BehaviorSubject<boolean>(true);

  constructor() {
    // setTimeout(() => {
    //   // this.isLoggedin = false;
    //   console.log(this.isLoggedin);
    // }, 5000);
  }

  public sendMessage(message: string) {
    this.abc.next(message);
  }

  public receiveMessage(): Observable<string> {
    return this.abc.asObservable();
  }

  public isAuthenticated() {
    return this.isLoggedin;
  }
}
