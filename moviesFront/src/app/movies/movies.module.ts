import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './movie.service';
import {RouterModule} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Movie } from './movie';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [MovieListComponent],
  declarations: [MovieListComponent],
  providers: [MovieService]
})
export class MoviesModule { }
