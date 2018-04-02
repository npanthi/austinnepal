import {Component, OnInit, ViewChild,ApplicationRef} from '@angular/core';
import {YoutubeApiService} from "../youtube-api.service";
import { Router } from '@angular/router';
import {PopUpModelComponent} from "../pop-up-model/pop-up-model.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchValue:string;
  url : any;
  listOfVideo:any;
  showLoading:boolean = false;
  videoNotFound : string = '';
  showError :boolean = false;
  @ViewChild(PopUpModelComponent) popUp : PopUpModelComponent;
  constructor(private youtubeService: YoutubeApiService,private route:Router,private cng:ApplicationRef) {
  }

  ngOnInit() {
    console.log(this.route.url);
    this.url = this.route.url.split("/");
    this.searchValue = this.url[2];
   /* console.log("try out",this.searchValue);*/
   this.searchYoutube(this.searchValue);
  }



  searchYoutube(value){
    this.showLoading = true;
    this.youtubeService.searchVideo(value).subscribe((data)=> this.listOfVideo = (data));
    this.cng.attachView(this.listOfVideo);
    this.showLoading = true;
   }

  video(id){
    console.log("videoID",id);
    this.popUp.childVideo(id);
  }
}
