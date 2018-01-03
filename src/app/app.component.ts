import { Component, OnInit } from '@angular/core';
import { WimpService } from './wimp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movies;
  actors;

  constructor(private wimpservice: WimpService) { }

  ngOnInit() {
    this.getMovies();
    this.getActors();
  }

  getMovies() {
    this.wimpservice.getRecords("movies")
      .subscribe(moviesFromApi => {
        this.movies = moviesFromApi;
      })
  }

  getActors() {
    this.wimpservice.getRecords("actors")
      .subscribe(actorsFromApi => {
        this.actors = actorsFromApi;
      })
  }

  onSubmitMovie(movieData: NgForm) {
    this.wimpservice.addRecord("movies", movieData.value)
      .subscribe(addMovie => {
        this.getMovies();
        movieData.reset();
      })
  }

  onSubmitActor(actorData: NgForm) {
    this.wimpservice.addRecord("actors", actorData.value)
      .subscribe(addActor => {
        this.getActors();
        actorData.reset();
      })
  }

}




