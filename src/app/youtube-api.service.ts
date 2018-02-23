import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";


@Injectable()
export class YoutubeApiService {
  name : string = " ";
  videoContent:string='';
  youtubeData : any[];
  myAPIKey : string = "AIzaSyDpgdG4ipJ5NyrmDqTpCLY5bnN3_lv0dnU";
  url:string = "https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC08i2mnmdrJwu-Lq4zDZKYg&maxResults=50&key=AIzaSyDpgdG4ipJ5NyrmDqTpCLY5bnN3_lv0dnU"

  myPlayListURL : string = "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCj-BQGbXXIuMFS04ZgvIeRg&maxResults=50&key=AIzaSyDpgdG4ipJ5NyrmDqTpCLY5bnN3_lv0dnU"

   breakFailPlayListAPI : string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL5IdznwvT_05Ltok6998IsFIO-qxKRzyc&maxResults=50&key=" + this.myAPIKey;
   bhadragolPlayListAPI : string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL5IdznwvT_07yiUGA2964s0bRSAGfvnbD&maxResults=50&key=" + this.myAPIKey;
   meriBassaiPlayListAPI : string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL5IdznwvT_06KpomPRMReY_cHcR_R7MmH&maxResults=50&key=" + this.myAPIKey;
   jireKhursaniPlayListAPI : string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL5IdznwvT_05tlx4_057jpfjziUxKExUT&maxResults=50&key="+this.myAPIKey;
   hakkahakiPlayListAPI : string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL9DARAjEDbdCEMXfmXROBdONrAPYi3ovR&maxResults=50&key=" + this.myAPIKey;
   nepaliMoviePlayListAPI : string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL9DARAjEDbdD8EN5ruXaXQq5qx-PGKq6k&maxResults=50&key=" + this.myAPIKey;
   nepaliShortMoviesPlayListAPI : string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL9DARAjEDbdDIkFuEFVmnq1cP3PJcrhzA&maxResults=50&key=" + this.myAPIKey;
   allModernSongAPIList : string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL9DARAjEDbdDTnkaFBzRWjnbgkqGnqe2i&maxResults=50&key="+ this.myAPIKey;
   myPlayList : string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLCusKB-IHMzftJlDk08NyF8r8v5fh2d0G&key="+ this.myAPIKey;
   hindiMovieList : string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLthizvY3wuX8ofqdMFWBmo66TUM56_xLy&maxResults=50&key="+ this.myAPIKey;
  englishMovieList : string = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL-kg-GL4FKRTYe2CwXTl12ffpiJJTEgSy&maxResults=50&key="+ this.myAPIKey;
  searchAnything : string = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+this.videoContent+"&key="+this.myAPIKey;
   constructor(private httpService:HttpClient) { }

getHindiMovie(){
  return this.httpService.get(this.hindiMovieList);
}

getEnglishMovie(){
  return this.httpService.get(this.englishMovieList);
}

   getNepaliMovie(){
  console.log("api",this.nepaliMoviePlayListAPI);
  return this.httpService.get(this.nepaliMoviePlayListAPI);
}
getmeriBassai(){
     return this.httpService.get(this.meriBassaiPlayListAPI);
}
  getHakkaHakki(){
    return this.httpService.get(this.hakkahakiPlayListAPI);
  }
  getNepaliShortMovie(){
    return this.httpService.get(this.nepaliShortMoviesPlayListAPI);
  }
  getBhadragoal(){
    return this.httpService.get(this.bhadragolPlayListAPI);
  }
  getjireKhursani(){
    return this.httpService.get(this.jireKhursaniPlayListAPI);
  }
  getBreakFail(){
    return this.httpService.get(this.breakFailPlayListAPI);
  }
getHighlightMovies(){
    return this.httpService.get(this.url);

}
  getfromMyPlayList(){
    return this.httpService.get(this.myPlayListURL);

  }
  defaultURL(url){
    return this.httpService.get(url);
  }
  searchVideo(value){
    this.videoContent = value;
    console.log("value",value);
    return this.httpService.get(this.searchAnything);
}
  findVideo(name){
    console.log(name);
  }
}
