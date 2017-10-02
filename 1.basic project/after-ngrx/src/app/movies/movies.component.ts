import { Component, OnInit } from '@angular/core';
import { iMovie } from './movie.model';

import { Store } from '@ngrx/store';//Store
import * as MovieActions from './ngrx/movies.actions'; //actions
import {iAppState ,iMoviesState} from './ngrx/movies.reducers'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  editMode: boolean = false;
  moviesState: Observable<iMoviesState>;
  //INJECT Store the contains the app state
  constructor(private store: Store<iAppState>) {

  }
  ngOnInit() {
    this.moviesState = this.store.select('movies'); //'movies'= the name of the partial store as mentioned in the StoreModule.provideStore()
  }
  onSave(movie: iMovie) {
    if (this.editMode) {
      this.store.dispatch(new MovieActions.updateMovie( {updatedMovie: movie }));
      this.editMode = false;

    } else {
      this.store.dispatch(new MovieActions.addMovie(movie));
    }

  }
  deleteMovie(index: number) {
    this.store.dispatch(new MovieActions.deleteMovie({ index: index }));
  }
  editMovie(index: number) {
    this.editMode= true;
    this.store.dispatch(new MovieActions.startEditMovie({ index: index }));
  }
}
