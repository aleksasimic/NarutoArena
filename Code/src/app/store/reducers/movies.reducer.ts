import { Action } from "@ngrx/store"
import { Movie } from "../../models/movie"
import { UPDATE_MOVIE, UpdateMovie, GET_FROM_DATABASE, DATA_ARRIVED, DataArrived } from "../actions";

const initialState: Movie[] = [
 

]

export default function (state: Movie[] = initialState, action: Action) {
    switch (action.type) {
        case UPDATE_MOVIE:
            {
                const {movie} = (action as UpdateMovie)
                return state.map(mov => mov.id === movie.id ?
                    movie:
                    mov
                )
            }
        // case GET_FROM_DATABASE:{
        //     return state.map(x=>x);
        // }
        // case DATA_ARRIVED:{
        //     const movielist=(action as DataArrived).movies;
        //     console.log(movielist);
        //     state=movielist;
        //     return state.map(x=>x);

        // }    
        default: {
            return state
        }
    }
}