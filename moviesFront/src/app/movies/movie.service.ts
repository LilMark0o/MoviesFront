import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDetail } from './movie-detail';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl: string = environment.baseUrl + 'movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MovieDetail[]> {
    return this.http.get<MovieDetail[]>(this.apiUrl);
  }

  getGenres(): Observable<string[]> {
    return this.http.get<string[]>(environment.baseUrl+'genres');
  }

  getMovie(id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.apiUrl}/${id}`);
  }

  searchMoviesByName(name: string): Observable<MovieDetail[]> {
    return this.http.get<MovieDetail[]>(`${this.apiUrl}/search/${name}`);
  }

  getMoviesByGenre(genre: string): Observable<MovieDetail[]> {
    return this.http.get<MovieDetail[]>(`${this.apiUrl}/genre/${genre}`);
  }

}
