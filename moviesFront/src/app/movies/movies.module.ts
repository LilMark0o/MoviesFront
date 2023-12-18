import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './movie.service';
import {RouterModule} from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [MovieListComponent, MovieDetailComponent],
  declarations: [MovieListComponent,MovieDetailComponent],
  providers: [MovieService]
})
export class MoviesModule { }
