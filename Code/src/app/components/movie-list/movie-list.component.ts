import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie'
import {Store} from '@ngrx/store'
import { State } from '../../store';
import { Observable } from 'rxjs';
import { SelectMovie, GetFromDatabase } from '../../store/actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  movies$: Observable<Movie[]>
  selected$: Observable<Movie>
  constructor(private store$: Store<State>) {
    this.movies$ = this.store$.select(state => state.movies)
    this.selected$ = this.store$.select(state => state.selectedMovie)
  }

  onSelectMovie(movie: Movie){
    this.store$.dispatch(new SelectMovie(movie))
  }

  ngOnInit() {
    this.store$.dispatch(new GetFromDatabase());
  }

}
