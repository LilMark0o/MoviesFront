import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { Actor } from '../actor';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors: Array<Actor> = [];
  selected: boolean = false;
  selectedActor!: Actor;

  // New field to store filter value
  searchTerm: string = '';
  p: number = 1;

  constructor(private actorService: ActorService) { }

  getActors(): void {
    this.actorService.getActors().subscribe(actors => this.actors = actors);
  }

  // New function to filter actors by name
  searchActorsByName(): void {
    // Update searchTerm value before the request
    this.searchTerm = (document.getElementById('searchBar') as HTMLInputElement).value;
    this.actorService.searchActorsByName(this.searchTerm).subscribe(actors => this.actors = actors);
  }

  onSelected(actor: Actor): void {
    this.selected = true;
    this.selectedActor = actor;
  }

  ngOnInit() {
    this.getActors();
    console.log(this.actors);
    
  }
}
