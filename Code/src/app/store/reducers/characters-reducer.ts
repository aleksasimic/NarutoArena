import { Action } from "@ngrx/store"
import { Character } from "../../models/character"
import { UPDATE_MOVIE, UpdateMovie, GET_FROM_DATABASE, DATA_ARRIVED, DataArrived } from "../actions";

const initialState: Character[] = [
 

]

export default function (state: Character[] = initialState, action: Action) {
    switch (action.type) {
        case GET_FROM_DATABASE:{
            return state.map(x=>x);
        }
        case DATA_ARRIVED:{
            const charlist=(action as DataArrived).characters;
            console.log(charlist);
            state=charlist;
            return state.map(x=>x);

        }    
        default: {
            return state
        }
    }
}