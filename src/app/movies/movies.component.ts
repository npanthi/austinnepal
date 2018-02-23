import { Component, OnInit } from '@angular/core';
import {YoutubeApiService} from "../youtube-api.service";
import {HttpClient} from "@angular/common/http";
import { NgModel } from '@angular/forms';
import {forEach} from "@angular/router/src/utils/collection";
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

hindiMovies : boolean = false;
nepaliMovies : boolean = false;
englishMovies : boolean = false;
showModel : boolean = false;
listOfMovies : any;
name : string;
  youtubeId : string = null;
  youtubeVideoUrl : string="https://www.youtube.com/embed/";
  videoUrl : string = "";
  homePage:boolean = false;
  loadMore:boolean= false;

  constructor(private myYoutubeApi : YoutubeApiService, private httpClient:HttpClient,public sanitizer: DomSanitizer){

  }

  ngOnInit() {


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
  close(){
    this.showModel = false;
  }

  movies(movieName){
    this.loadMore = true;
    if(movieName ==='englishiMovie'){

      this.myYoutubeApi.getEnglishMovie().subscribe((data) => this.listOfMovies = data
        );}
      else if (movieName ==='hindiMovie'){
        this.myYoutubeApi.getHindiMovie().subscribe((data) => this.listOfMovies = data
        );}
        else if (movieName==='nepaliMovie') {
      this.myYoutubeApi.getNepaliMovie().subscribe((data) => this.listOfMovies = data
      );
    }


    console.log(this.listOfMovies);
  }
}
