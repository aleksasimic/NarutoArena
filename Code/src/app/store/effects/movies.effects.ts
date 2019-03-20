import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as charactersActions from '../actions';
import { switchMap,map } from 'rxjs/operators';
import * as databaseService from '../../services/database.service';

@Injectable()
export class MoviesEffects {
  
 constructor(private actions$:Actions,private dbService:databaseService.DatabaseService){} 
   
 @Effect()
 loadMovies$=this.actions$.ofType(charactersActions.GET_FROM_DATABASE)
  .pipe(
    switchMap(()=>{
        return this.dbService.getCharacters()
        .pipe(
            map(characters=>new charactersActions.DataArrived(characters))
        )
    }))



}