import {ActionReducerMap} from '@ngrx/store';
import * as fromAuth from '../auth/ngrx/auth.reducers';
// ==== Global App State ====
export interface AppState{
    auth : fromAuth.authState
}


export const reducers:ActionReducerMap<AppState> ={
    auth : fromAuth.authReducer
}