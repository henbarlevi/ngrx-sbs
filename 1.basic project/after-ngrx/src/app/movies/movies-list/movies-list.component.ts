import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { iMovie } from '../movie.model';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }
  @Input()movies: iMovie[] =[
  ];
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();
  
  ngOnInit() {
  }
  onDelete(index:number ){
    this.delete.emit(index);
  }
  onEdit(index:number ){
    this.edit.emit(index);
  }
}
