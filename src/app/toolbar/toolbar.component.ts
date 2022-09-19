import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { reloadScripts } from '../../helpers/helper';
import { toggleMenu } from './toolbar.js';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit{
  private _toolbarState: boolean = true;

  public userProfileImg: string | null | undefined;
  public givenName: string | null | undefined;
  public familyName: string | null | undefined;
  public email: string | null | undefined;

  ngOnInit(): void {
    const userInfo:any = localStorage.getItem('userInfo');
    const parsedData = JSON.parse(userInfo);
    this.userProfileImg = parsedData.info.picture;
    this.email = parsedData.info.email;
    this.givenName = parsedData.info.given_name;
    this.familyName =parsedData.info.family_name;
    console.log(this.userProfileImg)
  }

  public toggleMenu(){
    // toggleMenu()
    let menu: HTMLElement | any;
    menu = document.getElementById("sa-app--desktop-sidebar")
    if (menu != null){
      if (this._toolbarState){
        menu.classList = "sa-app sa-app--mobile-sidebar-hidden sa-app--toolbar-fixed sa-app--desktop-sidebar-hidden";
      } else {
        menu.classList = "sa-app sa-app--desktop-sidebar-shown sa-app--mobile-sidebar-hidden sa-app--toolbar-fixed";
      }
      this._toolbarState = !this._toolbarState;
    }
  }


}
