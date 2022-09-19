import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVideos } from './IVideos';
import { Observable } from 'rxjs';
import { SignupGoogleServiceService } from 'src/app/auth/login/signup-google-service.service';

@Injectable({
  providedIn: 'root'
})
export class HomeViewService {

  private _url: string = "http://localhost:3000/homeVideos"

  constructor(private http: HttpClient, private google:SignupGoogleServiceService) {
    // console.log(google.isLoggedIn())
  }

  getVideos(): Observable<any>{
    return this.http.get<any>(this._url);
  }

}
