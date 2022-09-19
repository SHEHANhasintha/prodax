import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { upload } from './upload'
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public thumbnailLocation: object | undefined;
  public videoLocation: object | undefined;
  public title: string | undefined;
  public description: string | undefined;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  public setFile(event: any): void{
    console.log(event.target.files[0])
    this.thumbnailLocation = event.target.files[0]

  }

  public setVideoFile(event: any): void{
    console.log(event.target.files[0])
    this.videoLocation = event.target.files[0]
    console.log(this.videoLocation)

  }

  public setDescription(event: any): void{
    this.description = event.target.value
  }

  public setTitle(event: any): void{
    this.title = event.target.value
  }

  public async submit(event: any): Promise<void>{
    await upload(this.thumbnailLocation, this.videoLocation, this.description, this.title)
    // upload(this.thumbnailLocation)
  }

}
