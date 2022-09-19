import { Component, OnInit } from '@angular/core';
import { reloadScripts } from '../../helpers/helper'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
    // reloadScripts()
  }

}
