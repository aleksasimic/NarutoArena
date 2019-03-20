import { Movie } from '../models/movie'
import {Injectable} from '@angular/core'
@Injectable()
export class MovieService {
    private movies: Movie[];

    constructor() {
        this.movies = []
        
    }
    public getAll(){
        return this.movies
    }
} 