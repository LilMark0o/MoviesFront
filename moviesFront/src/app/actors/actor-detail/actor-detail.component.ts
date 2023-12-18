import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../actor.service';
import { Actor } from '../actor';
import { MovieDetail } from 'src/app/movies/movie-detail';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  actorId!: string;
  movies!: MovieDetail[];
  actorDetail: Actor | undefined; // Ensure actorDetail is initialized as undefined

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService
  ) {}

  getActorDetails() {
    this.actorService.getActor(this.actorId).subscribe(actor => {
      this.actorDetail = actor;
      console.log('Actor Detail:', this.actorDetail);
    });
  }

  getActorMovies() {
    this.actorService.getActorMovies(this.actorId).subscribe(movies => {
      this.movies = movies;
      this.getActorDetails(); // Call getActorDetails only after movies are fetched
    });
  }

  ngOnInit() {
    this.actorId = this.route.snapshot.paramMap.get('id')!;
    if (this.actorId) {
      this.getActorMovies();
    }
  }
}
