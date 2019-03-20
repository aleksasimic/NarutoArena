import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input()
  public movie: Movie

  constructor() { }

  ngOnInit() {
  }

  increaseRating(){
    this.movie.rating++;
  }
  decreaseRating(){
    this.movie.rating--;
  }
  setRating(i) {
    this.movie.rating = i;
  }

}
