import { Component, OnInit } from '@angular/core';
import {YoutubeApiService} from './../youtube-api.service';
import {HttpClient} from "@angular/common/http";
import {PopUpModelComponent} from "../pop-up-model/pop-up-model.component";
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-austinsidebar',
  templateUrl: './austinsidebar.component.html',
  styleUrls: ['./austinsidebar.component.css']
})

export class AustinsidebarComponent implements OnInit {
  showModel : boolean = false;
  youtubeId : string = null;
  youtubeVideoUrl : string="https://www.youtube.com/embed/";
  videoUrl : string = "";
  public localVar:any;
  public videoId : string;
  youtubeVideoLink : string = 'https://www.youtube.com/watch?v=';
  myLink : string = 'https://www.youtube.com/watch?v=KYz1Fc_BRZo';
  constructor(private myService:YoutubeApiService,private httpclient :HttpClient,private  popUp:PopUpModelComponent,public sanitizer: DomSanitizer) { }

  ngOnInit() {

     this.myService.getHighlightMovies().subscribe((data) => this.localVar = data);
    //console.log("Nisan Data",this.local)
  }

  showYouTubeVideo(id){
    this.showModel = true;

  }

  close(){
    this.showModel = false;
  }

  video(id){
    //console.log(id);
    this.showModel = true;
    //this.popUp.launchVideo();
    //this.showModel = true;
    this.youtubeId = id;
    this.videoUrl = this.youtubeVideoUrl + id;
    //console.log(this.videoUrl);

   // console.log("ID",id);
  }

}
