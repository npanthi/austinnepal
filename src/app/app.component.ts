import { Component } from '@angular/core';
import {YoutubeApiService} from './youtube-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app is working this is nisan';
  searchData:any;
  video : any;

  homePage:boolean = true;
  constructor(private youtubeService:YoutubeApiService){}

  searchVideo(name){
    console.log(name);
  }

 findVideo(value){
   this.youtubeService.searchVideo('Nepali Movie').subscribe((data) => console.log(data));
   console.log(this.searchData);
 }
 sideBar(){
   this.homePage = false;
 }
}
