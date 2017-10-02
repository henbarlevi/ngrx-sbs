/** actions have:
 * 1.type = the name/type of the action
 * 2.payload = OPTIONAL - more data about the action (for example ADD_MOVIE - the payload will be the added movie object)
 */
import { Action } from '@ngrx/store';
import { iMovie } from '../movie.model';

/* ==== ACTIONS ====*/

// ------- add movie ------
export const ADD_MOVIE = 'ADD_MOVIE';
export class addMovie implements Action {
    constructor(public payload: iMovie) { }
    readonly type = ADD_MOVIE;
}
// ------- start edit movie ------
export const START_EDIT_MOVIE = 'START_EDIT_MOVIE';
export class startEditMovie implements Action {
    constructor(public payload: { index: number }) { }
    readonly type = START_EDIT_MOVIE;
}

// ------- update movie ------
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export class updateMovie implements Action {
    constructor(public payload: { updatedMovie: iMovie }) { }
    readonly type = UPDATE_MOVIE;
}
// ------- delete movie ------
export const DELETE_MOVIE = 'DELETE_MOVIE';
export class deleteMovie implements Action {
    constructor(public payload: { index: number }) { }
    readonly type = DELETE_MOVIE;
}







/// EXPORT
export type MovieActions = addMovie | startEditMovie | updateMovie | deleteMovie 