import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorService } from './actor.service';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [ActorListComponent, ActorDetailComponent],
  declarations: [ActorListComponent, ActorDetailComponent],
  providers: [ActorService]
})
export class ActorsModule { }
