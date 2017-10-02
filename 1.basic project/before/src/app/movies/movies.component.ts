import { Component, OnInit } from '@angular/core';
import { iMovie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  editMode: boolean = false;
  editIndex: number;
  constructor() { }
  movie: iMovie | any = { };
  movies: iMovie[]  = [{
    name: 'Figth Club',
    year: 1999
  }]
  ngOnInit() {
  }
  onSave(movie: iMovie) {
    if (this.editMode) {
      this.movies[this.editIndex] = this.movie;
      this.editIndex = -1;
      this.editMode = false;
     
    } else {
      this.movies.push(this.movie);
    }
    this.movie = {};
  }
  deleteMovie(index: number) {
    this.movies.splice(index,1);
  }
  editMovie(index: number) {
    this.editMode = true;
    this.editIndex = index;
    Object.assign(this.movie, this.movies[index]);
    console.log(this.movie);
  }
}
