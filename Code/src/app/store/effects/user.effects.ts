import { Injectable } from '@angular/core';
import { Effect, Actions} from '@ngrx/effects';
import * as userActions from '../actions';
import { switchMap,map } from 'rxjs/operators';
import * as databaseService from '../../services/database.service';
import {of} from 'rxjs';
import { Action } from '@ngrx/store';
@Injectable()
export class UserEffects {
  
 constructor(private actions$:Actions,private dbService:databaseService.DatabaseService){console.log("U effectima sam")} 
   
 @Effect()
 loadUsers$=this.actions$.ofType(userActions.GET_FROM_DATABASE_USER)
  .pipe(
    switchMap(()=>{
        return this.dbService.getUser()
        .pipe(
            map(users=>new userActions.DataArrivedUser(users))
        )
    }))


}