import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Movie} from '../../models/movie'
import {MovieService} from '../../services/movie.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() 
  public movie: Movie
  @Input()
  public selected: boolean

  @Output()
  public selectedEvent: EventEmitter<Movie> = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  selectMovie() {
    console.log(this.movie)
    this.selectedEvent.emit(this.movie)
  }

}
