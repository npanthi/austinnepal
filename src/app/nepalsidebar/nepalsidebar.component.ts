import { Component, OnInit } from '@angular/core';
import {YoutubeApiService} from '../youtube-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-nepalsidebar',
  templateUrl: './nepalsidebar.component.html',
  styleUrls: ['./nepalsidebar.component.css']
})
export class NepalsidebarComponent implements OnInit {

  public nepaliVideoSideBar : any;
  showModel = false;
  youtubeId : string = null;
  youtubeVideoUrl : string="https://www.youtube.com/embed/";
  videoUrl : string = "";

  constructor(private apiService:YoutubeApiService,public sanitizer: DomSanitizer) { }

  ngOnInit() {
    //this.myService.getBreakFail().subscribe((data) => this.breakFailData = data);
    this.apiService.getNepaliShortMovie().subscribe((data)=> this.nepaliVideoSideBar = data);
  }
  showYouTubeVideo(id){
    this.showModel = true;

  }

  close(){
    this.showModel = false;
  }
  video(id){
    console.log("myVideoID",id);
    this.showModel = true;
    //this.popUp.launchVideo();
    //this.showModel = true;
    this.youtubeId = id;
    this.videoUrl = this.youtubeVideoUrl + id;
    console.log("myVideoID",this.videoUrl);
    //console.log(this.videoUrl);

    // console.log("ID",id);
  }
}
