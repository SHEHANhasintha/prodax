import { Component, OnInit } from '@angular/core';
import { videoSocket } from './main.js'

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.css']
})
export class VideoChatComponent implements OnInit {

  public roomId: any | undefined;
  public currentLocation: string | undefined;
  public message: any;
  public socket: any;
  public messages: any[] = [

  ];

  constructor() {
  }

  ngOnInit(): void {
    let data: any = videoSocket()
    this.roomId = data.room;
    this.socket = data.socket;

    this.socket.on('room-message-send', (data: any) => {
      console.log(data, this.socket.id)
      this.messages.push(data)

    })

    console.log(window.location.href.includes("?room="), window.location.href)
    if (!window.location.href.includes("?room=")){
      window.location.href = window.location.href + "?room=" + this.roomId;
    }
    this.currentLocation = window.location.href;
  }

  public sendMessage(event: any){
    event.preventDefault();
    // console.log(this.message)

    let createdMessage = {
      message: this.message,
      room: this.roomId,
      who: "shehan",
      ownerId: this.socket.id,
      me: true,
    }
    this.messages.push(createdMessage)

    console.log(createdMessage, this.socket.id)
    // createdMessage.me = false;

    this.socket.emit("room-message-send", createdMessage)

  }

  public onKey(value: string){
    this.message = value
  }

}
