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
  slideConfig = {"slidesToShow": 2, "slidesToScroll": 2, "dots": true, "infinite": true, "autoplay": true, "autoplaySpeed": 2000};

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

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];


  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }
}
