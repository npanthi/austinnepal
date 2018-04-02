import { Component,OnInit,OnDestroy } from '@angular/core';
import {YoutubeApiService} from './youtube-api.service';
import {SearchComponent} from './search/search.component'





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'app is working this is nisan';
  searchData:any;
 private sub:any;
movieName :any;
inputField : string = '';



  homePage:boolean = true;
  constructor(private youtubeService:YoutubeApiService,private search:SearchComponent){}

ngOnInit() {

}

 findVideo(value){
   this.youtubeService.searchVideo('Nepali Movie').subscribe((data) => console.log(data));
   console.log(this.searchData);
 }
 sideBar(){
   this.homePage = false;
 }
searchSubmit(keyword){
  /*console.log("this is search value",keyword);*/
  /*this.youtubeService.keywordSearch = this.inputField;*/
  this.search.searchYoutube(keyword);
}

ngOnDestroy(){
this.youtubeService.keywordSearch = this.inputField;
console.log("destroy",this.inputField);
}

}

