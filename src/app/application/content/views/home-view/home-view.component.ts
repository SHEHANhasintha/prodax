import { Component, OnInit } from '@angular/core'
import { HomeViewService } from './home-view.service'

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  public thumbnails: any[] = []

  constructor(private homeViewService: HomeViewService) {

  }

  ngOnInit() {
    this.homeViewService.getVideos()
      .subscribe(data => {
        console.log(data)
        this.thumbnails = data

      })

    console.log(this.thumbnails)

  }

}
