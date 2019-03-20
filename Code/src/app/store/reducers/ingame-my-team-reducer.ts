import { Character } from "../../models/character"
import { MyTeamCharacterAdded,MY_TEAM_CHARACTER_ADDED,DO_MOVE_AI,DoMoveAi } from "../actions";
import { Action } from "@ngrx/store";
import {GAME_STARTED} from '../actions';
const initialState: Character[] = [];

export default function (state:Character[] = initialState, action: Action) {
    switch (action.type) {
        case MY_TEAM_CHARACTER_ADDED:{
            const {character}=(action as MyTeamCharacterAdded);
            console.log("U MYTEAMCHARACTERADDED",character);
            state.push(character);
            return state.map(x=>x);

        }
        case DO_MOVE_AI:{
            const {skills}=(action as DoMoveAi);
            const {chars}=(action as DoMoveAi);
            let niz=[];
            
            state.forEach(function(aichar){
              chars.forEach(function(char){
                let i=0;
                if(char.id===aichar.id)
                {
                  console.log("Naso sam",char);
                  if(skills[i].singletarget)
                    aichar.health+=skills[i].effect;
                  if(skills[i].threetargets)
                    {
                      state.forEach(function(el){
                        el.health+=skills[i].effect
                      })
                    }
                  if(skills[i].twotargets)
                  {
                    let pom1=Math.floor((Math.random() * 3) + 1);
                    let pom2=Math.floor((Math.random() * 3) + 1);
                    state[pom1-1].health+=skills[i].effect;
                    state[pom2-1].health+=skills[i].effect;
                  }    
                }
              })  
            })
            return state.map(x=>x);
        }    
        default: {
            return state
        }
        case GAME_STARTED:{
            console.log("U game startedu sam",state);
            return state.map(x=>x);
        }
    }
}