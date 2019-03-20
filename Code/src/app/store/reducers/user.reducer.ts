import { Action } from "@ngrx/store"
import { User } from "../../models/user";
import { GET_FROM_DATABASE_USER, DATA_ARRIVED_USER, DataArrivedUser, GetFromDataBaseUser } from "../actions";

const initialState: User[] = [];

export default function (state: User[] = initialState, action: Action) {
    switch (action.type) {
        // case GET_FROM_DATABASE_USER:{
        //     return state;
        // }
        case GET_FROM_DATABASE_USER:{
            console.log("U reduceru sam");
            const user=(action as GetFromDataBaseUser).username;
            const pass=(action as GetFromDataBaseUser).password;
            state.push(new User(0,user,pass,0,0,"","",""));
            return state.map(x=>x);
        }
        case DATA_ARRIVED_USER:{
            const users=(action as DataArrivedUser).users;
            console.log(users);
            users.forEach(function(element){
                if(element.username===state[0].username && element.password===state[0].password)
                    {   
                        state[0]=element;
                        console.log(element);
                        return state.map(x=>x);
                    }
            })
            return state;

        }    
        default: {
            return state
        }
    }
}