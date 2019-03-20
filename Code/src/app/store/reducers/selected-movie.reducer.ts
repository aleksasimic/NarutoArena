import { Action } from "@ngrx/store"
import { Movie } from "../../models/movie"
import { SELECT_MOVIE, SelectMovie } from "../actions";

export default function (state: Movie = null, action: Action) {
    switch (action.type) {
        case SELECT_MOVIE:
            {
                const {movie} = (action as SelectMovie)
                return movie
            }
        default: {
            return state
        }
    }
}