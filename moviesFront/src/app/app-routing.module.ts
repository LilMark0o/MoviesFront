import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
   { path: 'movies', component: MovieListComponent },
    { path: '', component: LayoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
