import { Action } from "@ngrx/store"
import { Character } from "../../models/character"
import { CHARACTER_SELECTED,CharacterSelected } from "../actions";

const initialState: Character[] = [
 

]

export default function (state: Character[] = initialState, action: Action) {
    switch (action.type) {
        case CHARACTER_SELECTED:{
            const {character}=(action as CharacterSelected);
            console.log("U character selected reduceru sam",character);
            console.log("State je",state);
            if(state.length<3)
                state.push(character);
            return state.map(x=>x);

        }    
        default: {
            return state
        }
    }
}