import { Component, OnInit,ViewChild } from '@angular/core';
import {YoutubeApiService} from './../youtube-api.service';
import {HttpClient} from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';
import {PopUpModelComponent} from "../pop-up-model/pop-up-model.component";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  someProperty: string = '';
  public myPlayList: any;
  public breakFailData : any;
  bhadragoalData : any;
  jireKhursaniData : any;
  meriBassaiData : any;
  hakkaHakkiData : any;
  shortMovieData : any;
  lokDohori : any;
  movieTrailer : any;
  hindiTrailer:any;
  showModel : boolean = false;
  youtubeId : string = null;
  youtubeVideoUrl : string="https://www.youtube.com/embed/";
  videoUrl : string = "";
  modernSongs:any;
  nepaliPrank:any;
  showRed : boolean=false;
  myClass :any = "";

  @ViewChild(PopUpModelComponent) popUp : PopUpModelComponent;


  constructor(private myService: YoutubeApiService, private httpclient: HttpClient,public sanitizer: DomSanitizer) {
  }
  ngOnInit() {


      this.myService.getBreakFail().subscribe((data) => this.breakFailData = data);
      this.myService.getBhadragoal().subscribe((data) => this.bhadragoalData = data);
      this.myService.getjireKhursani().subscribe((data) => this.jireKhursaniData = data);
      this.myService.getmeriBassai().subscribe((data) => this.meriBassaiData = data);
      this.myService.getHakkaHakki().subscribe((data) => this.hakkaHakkiData = data);
      this.myService.getNepaliShortMovie().subscribe((data) => this.shortMovieData = data);
      this.myService.getMovieTrailer().subscribe((data) => this.movieTrailer = data);
      this.myService.hindiMovieTrailer().subscribe((data) => this.hindiTrailer = data);
      this.myService.getLokDohori().subscribe((data) => this.lokDohori = data);
      this.myService.allModernSongs().subscribe((data) => this.modernSongs = data);
      this.myService.prankVideo().subscribe((data) => this.nepaliPrank = data);
      //console.log("BreakFailApiCall",this.breakFailData);
  }
  close(){
    this.showModel = false;
  }

   video(id){
    this.popUp.childVideo(id);
   }

  /*video(id){
    //console.log(id);
    this.showModel = true;
    //this.popUp.launchVideo();
    //this.showModel = true;
    this.youtubeId = id;
    this.videoUrl = this.youtubeVideoUrl + id;
    console.log(this.videoUrl);

    // console.log("ID",id);
  }*/
  moreInfo(){
    if(!this.showRed){
      this.showRed = true;
    }
     else
      this.showRed = false;
       console.log("Clicked on Hakka Hakki",this.showRed);
  }

}

