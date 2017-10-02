
import { Action } from '@ngrx/store';
import * as AuthActions from './auth.actions';
/* === INITIAL STATE ===*/

export interface authState {
    token: string,
    authenticated: boolean
}

const initialState: authState = {
    token: null,
    authenticated: false
}
/** ==== Auth REDUCER ==== */

export function authReducer(state = initialState, action: Action) {
    switch (action.type) {
        case AuthActions.SINGUP:
        case AuthActions.SINGIN:
            return {
                ...state,
                authenticated: true
            }
        case AuthActions.SET_TOKEN:
        return{
            ...state,
            token: this.action.payload
        }
        
        default:
            return state;
    }

}