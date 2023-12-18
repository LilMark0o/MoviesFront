import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { MovieDetail } from '../movie-detail';
import { Actor } from 'src/app/actors/actor';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieId!: string;
  actors!: Actor[];
  movieDetail: MovieDetail | undefined; // Ensure movieDetail is initialized as undefined

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  getMovieDetails() {
    this.movieService.getMovie(this.movieId).subscribe(movie => {
      this.movieDetail = movie;
      console.log('Movie Detail:', this.movieDetail);
    });
  }

  getMovieActors() {
    this.movieService.getActorsByMovie(this.movieId).subscribe(actors => {
      this.actors = actors;
      this.getMovieDetails(); // Call getMovieDetails only after actors are fetched
    });
  }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id')!;
    if (this.movieId) {
      this.getMovieActors();
    }
  }
}
