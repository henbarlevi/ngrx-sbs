import { Action } from '@ngrx/store';
import * as MovieActions from './movies.actions';
import { iMovie } from '../movie.model';

export interface iAppState{
    moviesState:iMoviesState
}
/* === INITIAL STATE ===*/
export interface iMoviesState{
    movies:iMovie[],
    movie:iMovie | {},
    editIndex:number
}
const initialState :iMoviesState = {
    movies: [
        {
            name: 'Figth Club',
            year: 1999
        },

    ],
    movie: {},
    editIndex: -1

}
/** ==== MOVIES REDUCER ==== */
export function MoviesReducer(state = initialState, action: MovieActions.MovieActions): iMoviesState {//state (=current state) passed by the ngrx
    //return the new state after the action
    //NOTE - always return a new Object state! dont return modified state;
    switch (action.type) {
        case MovieActions.ADD_MOVIE: //------ADD_MOVIE-------
            return {
                ...state, //...state,//assign all properties of state to the returned obj
                movies: [...state.movies, action.payload], //assign all movies from the current state +the new movie in the payload
                movie:{}
            };
        case MovieActions.START_EDIT_MOVIE://------START_EDIT_MOVIE-------
            const editedMovie = { ...state.movies[action.payload.index] };
            return {
                ...state,
                editIndex: action.payload.index,
                movie: editedMovie
            };
        case MovieActions.UPDATE_MOVIE://------UPDATE_MOVIE-------
            let movies = [...state.movies];
            movies[state.editIndex] = action.payload.updatedMovie;
            return {
                ...state,
                movies: movies
            };
        case MovieActions.DELETE_MOVIE://------DELETE_MOVIE-------
            let oldMovies = [...state.movies];
            oldMovies.splice(action.payload.index, 1)
            return {
                ...state,
                movies: oldMovies
            }
        default:
            return state;
    }

} 