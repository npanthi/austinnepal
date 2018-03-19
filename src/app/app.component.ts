import { Component,OnInit } from '@angular/core';
import {YoutubeApiService} from './youtube-api.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app is working this is nisan';
  searchData:any;
 private sub:any;
movieName :any;



  homePage:boolean = true;
  constructor(private youtubeService:YoutubeApiService){}

ngOnInit() {
  console.log("hi this is work");
}

 findVideo(value){
   this.youtubeService.searchVideo('Nepali Movie').subscribe((data) => console.log(data));
   console.log(this.searchData);
 }
 sideBar(){
   this.homePage = false;
 }




}

