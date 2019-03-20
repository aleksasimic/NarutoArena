import {Action} from '@ngrx/store'
import {Movie} from '../models/movie'
import {Character} from '../models/character';
import { User } from '../models/user'
import { Skill } from '../models/skill';

export const UPDATE_MOVIE = "Update movie"
export const SELECT_MOVIE = "Select movie"
export const GET_FROM_DATABASE='Get from database'
export const DATA_ARRIVED='Data arrived from db'
export const GET_FROM_DATABASE_USER="Get user from database"
export const DATA_ARRIVED_USER="User data arrived"
export const CHARACTER_SELECTED="Character selected"
export const MY_TEAM_CHARACTER_ADDED="My team character added"
export const GAME_STARTED="Poceo"
export const GAME_STARTED_AI="Game started"
export const DO_MOVE='Do move';
export const DO_MOVE_AI='Do'; 

export class UpdateMovie implements Action {
    type = UPDATE_MOVIE

    constructor(public movie: Movie){

    }
}

export class SelectMovie implements Action {
    type = SELECT_MOVIE

    constructor(public movie: Movie){
        
    }
}

export class GetFromDatabase implements Action{
    type=GET_FROM_DATABASE;

    constructor(){}
}
export class DataArrived implements Action {
    type=DATA_ARRIVED;

    constructor(public characters:Character[]){}
}
export class GetFromDataBaseUser implements Action{
    
    type=GET_FROM_DATABASE_USER;

    constructor(public username:string,public password:string){console.log("U get from database sam");}
}
export class DataArrivedUser implements Action{
    type=DATA_ARRIVED_USER;
    constructor (public users:User[]){}
}
export class CharacterSelected implements Action{
    type=CHARACTER_SELECTED;
    constructor (public character:Character){}
}
export class MyTeamCharacterAdded implements Action{
    type=MY_TEAM_CHARACTER_ADDED;
    constructor (public character:Character){}
}
export class GameStarted implements Action{
    type=GAME_STARTED;
    constructor (){}
}
export class GameStartedAi implements Action{
    type=GAME_STARTED_AI;
    constructor(){}
}
export class DoMove implements Action{
    type=DO_MOVE;
    constructor (public skills:Skill[],public chars:Character[]){}
}
export class DoMoveAi implements Action{
    type=DO_MOVE_AI;
    constructor (public skills:Skill[],public chars:Character[]){}
}