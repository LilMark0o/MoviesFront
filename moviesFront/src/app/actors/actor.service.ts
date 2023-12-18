import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actor } from './actor';
import { MovieDetail } from '../movies/movie-detail';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private apiUrl: string = environment.baseUrl + 'actors';

  constructor(private http: HttpClient) { }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.apiUrl);
  }

  getActor(id: string): Observable<Actor> {
    return this.http.get<Actor>(`${this.apiUrl}/id/${id}`);
  }

  searchActorsByName(name: string): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${this.apiUrl}/search/${name}`);
  }

  getActorMovies(id: string): Observable<MovieDetail[]> {
    return this.http.get<MovieDetail[]>(`${this.apiUrl}/${id}/movies`);
  }



}
