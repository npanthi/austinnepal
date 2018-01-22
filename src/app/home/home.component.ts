import { Component, OnInit } from '@angular/core';
import {YoutubeApiService} from './../youtube-api.service';
import {HttpClient} from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  someProperty: string = '';
  public myPlayList: any;
  breakFailData : any;
  bhadragoalData : any;
  jireKhursaniData : any;
  meriBassaiData : any;
  hakkaHakkiData : any;
  shortMovieData : any;
  showModel : boolean = false;
  youtubeId : string = null;
  youtubeVideoUrl : string="https://www.youtube.com/embed/";
  videoUrl : string = "";


  constructor(private myService: YoutubeApiService, private httpclient: HttpClient,public sanitizer: DomSanitizer) {
  }
  ngOnInit() {


      this.myService.getBreakFail().subscribe((data) => this.breakFailData = data);
      this.myService.getBhadragoal().subscribe((data) => this.bhadragoalData = data);
      this.myService.getjireKhursani().subscribe((data) => this.jireKhursaniData = data);
      this.myService.getmeriBassai().subscribe((data) => this.meriBassaiData = data);
      this.myService.getHakkaHakki().subscribe((data) => this.hakkaHakkiData = data);
      this.myService.getNepaliShortMovie().subscribe((data) => this.shortMovieData = data);
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
    console.log(this.videoUrl);

    // console.log("ID",id);
  }

}

