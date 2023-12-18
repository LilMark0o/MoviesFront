import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieDetail } from '../movie-detail';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Array<MovieDetail> = [];
  genres : Array<string> = [];
  selected: boolean = false;
  selectedMovie!: MovieDetail;

  // New fields to store filter values
  generoFiltro: string = 'Action';
  searchTerm: string = '';
  p: number = 1;

  constructor(private movieService: MovieService) { }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }
  getGenres(): void {
    this.movieService.getGenres().subscribe(genres => this.genres = genres);
  }

  // New function to filter movies by genre
  getMoviesByGenre(): void {
    // Update generoFiltro value before the request
    this.generoFiltro = (document.getElementById('filtroGenero') as HTMLSelectElement).value;
    if (this.generoFiltro === 'Any') {
      this.getMovies();
    }
    else{
      this.movieService.getMoviesByGenre(this.generoFiltro).subscribe(movies => this.movies = movies);
    }
  }

  // New function to filter movies by name
  searchMoviesByName(): void {
    // Update searchTerm value before the request
    this.searchTerm = (document.getElementById('searchBar') as HTMLInputElement).value;
    this.movieService.searchMoviesByName(this.searchTerm).subscribe(movies => this.movies = movies);
  }

  onSelected(movie: MovieDetail): void {
    this.selected = true;
    this.selectedMovie = movie;
  }

  ngOnInit() {
    this.getMovies();
    this.getGenres();
  }
}
