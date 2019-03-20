import moviesReducer from './reducers/movies.reducer'
import selectedMovieReducer from './reducers/selected-movie.reducer'
import {Movie} from '../models/movie'
import {ActionReducerMap} from '@ngrx/store'
import { Character } from '../models/character';
import  charactersReducer  from './reducers/characters-reducer';
import { User } from '../models/user';
export * from './effects';
import userReducer from './reducers/user.reducer';
import characterSelectedReducer from './reducers/character-selected-reducer';
import myteamReducer from './reducers/ingame-my-team-reducer';
import aiteamReducer from './reducers/ingame-ai-team-reducers';

export interface State {
    movies: Movie[],
    selectedMovie: Movie,
    characters:Character[],
    user:User[],
    charactersselected:Character[],
    myteam:Character[],
    aiteam:Character[]
}

export const rootReducer: ActionReducerMap<State> = {
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer,
    characters:charactersReducer,
    user:userReducer,
    charactersselected:characterSelectedReducer,
    myteam:myteamReducer,
    aiteam:aiteamReducer
}