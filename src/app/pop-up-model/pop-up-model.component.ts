import { Component,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pop-up-model',
  templateUrl: './pop-up-model.component.html',
  styleUrls: ['./pop-up-model.component.css']
})
export class PopUpModelComponent implements OnInit {

     //modal : HTMLElement = document.getElementById('myModal');
   showModel : boolean = false;
  youtubeId : string = "";
  videoUrl : string = "";
  youtubeVideoUrl :string = "https://www.youtube.com/embed/";

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {

this.launchVideo();
  }

  childVideo(id){
    //console.log(id);
    this.showModel = true;
    //this.popUp.launchVideo();
    //this.showModel = true;
    this.youtubeId = id;
    this.videoUrl = this.youtubeVideoUrl + id;
    console.log("Play Video", this.videoUrl);

    // console.log("ID",id);
  }

launchVideo(){
    alert(this.showModel);
    this.showModel = true;
    alert(this.showModel);
}
close(){
  this.showModel = false;
}


}
