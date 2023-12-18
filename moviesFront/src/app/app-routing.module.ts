import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { ActorListComponent } from './actors/actor-list/actor-list.component';
import { LayoutComponent } from './layout/layout.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { ActorDetailComponent } from './actors/actor-detail/actor-detail.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'actors', component: ActorListComponent },
  { path: 'actors/:id', component: ActorDetailComponent },
  { path: '', component: LayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
