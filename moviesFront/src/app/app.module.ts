import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActorsModule } from './actors/actors.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  CommonModule,
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  MoviesModule,
  ActorsModule
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
