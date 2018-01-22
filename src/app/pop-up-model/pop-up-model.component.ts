import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up-model',
  templateUrl: './pop-up-model.component.html',
  styleUrls: ['./pop-up-model.component.css']
})
export class PopUpModelComponent implements OnInit {

     //modal : HTMLElement = document.getElementById('myModal');
   showModel : boolean = false;


  constructor() { }

  ngOnInit() {

//this.launchVideo();
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
