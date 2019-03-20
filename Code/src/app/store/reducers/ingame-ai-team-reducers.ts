import { Character } from "../../models/character"
import { MyTeamCharacterAdded,MY_TEAM_CHARACTER_ADDED } from "../actions";
import { Action } from "@ngrx/store";
import {GAME_STARTED_AI} from '../actions';
import {DO_MOVE,DoMove} from '../actions';

const initialState: Character[] = [
    {
        id: 1,
        imagecharacter: "https://cdn1.imggmi.com/uploads/2018/6/17/67dc755568236b4b3ba30dd4371c60bb-full.png",
        name: "Nagato",
        about: "Naruto Uzumaki is the main character of the series.He is very strong and uses Rasengan.He is one of the Jinchuuruki.",
        skills: [
          {
            number: 1,
            name: "Rasengan",
            description: "Deals 40 damage to selected target.",
            effect: -40,
            singletarget: true,
            twotargets: false,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/17/67dc755568236b4b3ba30dd4371c60bb-full.png"
          },
          {
            number: 2,
            name: "Shadow clones",
            description: "Deals 20 damage to all enemies.",
            effect: -20,
            singletarget: false,
            twotargets: true,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/16/07c0c720bdc63294a9e69b5cbb870973-full.jpg"
          },
          {
            number: 3,
            name: "Jinchuuruki mode",
            description: "Heals selected ally",
            effect: 20,
            singletarget: true,
            twotargets: false,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/16/710bda707fa7bdab2b0100178e3aa302-full.jpg"
          },
          {
            number: 4,
            name: "Invulnereable",
            description: "Makes you invulnereable next turn.",
            effect: 0,
            singletarget: false,
            twotargets: false,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/16/f0a61897f9250c72bd8d9761809d23dd-full.jpg"
          }
        ],
        health: 100
      },
      {
        id: 2,
        imagecharacter: "https://cdn1.imggmi.com/uploads/2018/6/17/2a02ff5f9a084403febd3d8c2fb3c679-full.jpg",
        name: "Naruto Uzumaki",
        about: "Naruto Uzumaki is the main character of the series.He is very strong and uses Rasengan.He is one of the Jinchuuruki.",
        skills: [
          {
            number: 1,
            name: "Rasengan",
            description: "Deals 40 damage to selected target.",
            effect: -40,
            singletarget: true,
            twotargets: false,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/16/c51d5f73da34c1833a0bffdf3b94522b-full.jpg"
          },
          {
            number: 2,
            name: "Shadow clones",
            description: "Deals 20 damage to all enemies.",
            effect: -20,
            singletarget: false,
            twotargets: true,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/16/07c0c720bdc63294a9e69b5cbb870973-full.jpg"
          },
          {
            number: 3,
            name: "Jinchuuruki mode",
            description: "Heals selected ally",
            effect: 20,
            singletarget: true,
            twotargets: false,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/16/710bda707fa7bdab2b0100178e3aa302-full.jpg"
          },
          {
            number: 4,
            name: "Invulnereable",
            description: "Makes you invulnereable next turn.",
            effect: 0,
            singletarget: false,
            twotargets: false,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/16/f0a61897f9250c72bd8d9761809d23dd-full.jpg"
          }
        ],
        health: 100
      },
      {
        id:3,
        imagecharacter: "https://cdn1.imggmi.com/uploads/2018/6/17/7599390daf12a98758b9011d26d0826a-full.png",
        name: "Naruto Uzumaki",
        about: "Naruto Uzumaki is the main character of the series.He is very strong and uses Rasengan.He is one of the Jinchuuruki.",
        skills: [
          {
            number: 1,
            name: "Rasengan",
            description: "Deals 40 damage to selected target.",
            effect: -40,
            singletarget: true,
            twotargets: false,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/16/c51d5f73da34c1833a0bffdf3b94522b-full.jpg"
          },
          {
            number: 2,
            name: "Shadow clones",
            description: "Deals 20 damage to all enemies.",
            effect: -20,
            singletarget: false,
            twotargets: true,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/16/07c0c720bdc63294a9e69b5cbb870973-full.jpg"
          },
          {
            number: 3,
            name: "Jinchuuruki mode",
            description: "Heals selected ally",
            effect: 20,
            singletarget: true,
            twotargets: false,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/16/710bda707fa7bdab2b0100178e3aa302-full.jpg"
          },
          {
            number: 4,
            name: "Invulnereable",
            description: "Makes you invulnereable next turn.",
            effect: 0,
            singletarget: false,
            twotargets: false,
            threetargets: false,
            skillurl: "https://cdn1.imggmi.com/uploads/2018/6/16/f0a61897f9250c72bd8d9761809d23dd-full.jpg"
          }
        ],
        health: 100
      }
];

export default function (state:Character[] = initialState, action: Action) {
    switch (action.type) {
        case GAME_STARTED_AI:{
             return state.map(x=>x);
         }
         case DO_MOVE:{
            const {skills}=(action as DoMove);
            const {chars}=(action as DoMove);
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
    }
}