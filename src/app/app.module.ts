import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WimpService } from './wimp.service';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddActorComponent } from './add-actor/add-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    AddActorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [WimpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
