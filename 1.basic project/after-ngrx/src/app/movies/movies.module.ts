import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { moviesRouting} from './movies.routing';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    moviesRouting
  ],
  declarations: [
    MoviesComponent,
    MovieEditComponent,
    MoviesListComponent
  ],
  exports:[MoviesComponent]
})
export class MoviesModule { }
