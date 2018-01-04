import { Component, OnInit } from '@angular/core';
import { WimpService } from '../wimp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movies;
  showUpdateTable: boolean;

  constructor(private wimpservice: WimpService) { 
    this.showUpdateTable = false;
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.wimpservice.getRecords("movies")
      .subscribe(moviesFromApi => {
        this.movies = moviesFromApi;
      })
  }

  onSubmitMovie(movieData: NgForm) {
    this.wimpservice.addRecord("movies", movieData.value)
      .subscribe(addMovie => {
        this.getMovies();
        movieData.reset();
      })
  }

  removeMovie(id) {
    this.wimpservice.deleteRecord("movies", id)
    .subscribe(removeMovieFromApi => {
      this.getMovies();
    })
  }

  updateMovie(movieData: NgForm, id) {
    this.wimpservice.editRecord("movies", movieData.value, id)
      .subscribe(updateMovieForAPI => {
        this.getMovies();
        this.showUpdateTable = false;
      })
  }

  ShowButton() {
    this.showUpdateTable = true;
  }

}
