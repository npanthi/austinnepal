import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { SlickModule } from 'ngx-slick';

import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import {YoutubeApiService} from './youtube-api.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AustinsidebarComponent } from './austinsidebar/austinsidebar.component';
import { NepalsidebarComponent } from './nepalsidebar/nepalsidebar.component';
import { PopUpModelComponent } from './pop-up-model/pop-up-model.component';
import { SearchComponent } from './search/search.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    NewsComponent,
    ContactComponent,
    AustinsidebarComponent,
    NepalsidebarComponent,
    PopUpModelComponent,
    SearchComponent,



  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    SlickModule.forRoot(),

    RouterModule.forRoot([
      { path: '',
        redirectTo: 'home',
        pathMatch: 'full' },
      {
        path : 'home',
        component : HomeComponent

      },
      {
        path: 'movies/englishMovie',
        component: MoviesComponent

      },
      {
        path: 'movies/nepaliMovie',
        component: MoviesComponent

      },
      {
        path: 'movies/hindiMovie',
        component: MoviesComponent

      },
      {
        path : 'news',
        component:NewsComponent
      },
      {
        path : 'contact',
        component: ContactComponent
      },
      {
        path : 'search',
        component: SearchComponent
      },
    ])
  ],
  providers: [YoutubeApiService,PopUpModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule {




}
