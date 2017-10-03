/** actions have:
 * 1.type = the name/type of the action
 * 2.payload = OPTIONAL - more data about the action (for example ADD_MOVIE - the payload will be the added movie object)
 */
import { Action } from '@ngrx/store';
/* ==== ACTIONS ====*/

// ------ sign in
export const SINGIN :string = 'SINGIN';
export class SingIn implements Action{
    readonly type = SINGIN;
    constructor(){}
}
// ------ sign up
export const SINGUP :string = 'SINGUP';
export class SingUp implements Action{
    readonly type = SINGUP;
    constructor(){}
}
// ------ logout
export const LOGOUT :string = 'LOGOUT';
export class Logout implements Action{
    readonly type = LOGOUT;
    constructor(){}
}
// ------ set token
export const SET_TOKEN :string = 'SET_TOKEN';
export class SetToken implements Action{
    readonly type = SET_TOKEN;
    constructor(public payload:string){}
}

/// EXPORT
export type AuthActions = SingIn |SingUp |Logout |SetToken 