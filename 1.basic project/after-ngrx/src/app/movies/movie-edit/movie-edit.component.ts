import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { iMovie } from '../movie.model';
@Component({
  selector: 'movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  constructor() { }
  @Input() movie: iMovie | {} = {};
  @Output() movieChange = new EventEmitter<iMovie | {}>();
  ngOnInit() {
  }
  onSave() {
    console.log('movie saved')
    this.movieChange.emit(this.movie);
  
  }
}
