import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { HomeViewService } from '../home-view/home-view.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public beLocation:string | undefined;
  public thumbnails: any[] = []

  constructor(private route: ActivatedRoute, private homeViewService: HomeViewService, private router: Router) {

    this.beLocation = environment.be + "/video/" + this.route.snapshot.paramMap.get('id');
    console.log(this.beLocation)
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.homeViewService.getVideos()
      .subscribe(data => {
        console.log(data)
        this.thumbnails = data
      })

    console.log(this.thumbnails)

  }

  public refresh(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

}
