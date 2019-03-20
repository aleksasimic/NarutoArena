import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { catchError } from 'rxjs/operators';
import { Movie } from '../models/movie';
import { Character } from '../models/character';
import { User } from '../models/user';

@Injectable()
export class DatabaseService {
  constructor(private http: HttpClient) { }

  getCharacters():Observable<Character[]>{
    return this.http.get<Character[]>("http://localhost:3003/all-characters")
    .pipe(catchError((error:any)=>Observable.throw(error.json())))
  }
  getUser():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3003/users")
    .pipe(catchError((error:any)=>Observable.throw(error.json())))
  }

}