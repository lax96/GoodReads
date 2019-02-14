import { ExploreGenreComponent } from './explore-genre/explore-genre.component';
import { BookRoutingModule } from './book-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreComponent } from './genre/genre.component';

@NgModule({
  declarations: [
    GenreComponent,
    ExploreGenreComponent    
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
