import * as AuthActions from './auth.actions';

export interface authState {
  token: string;
  authenticated: boolean;
}

const initialState: authState = {
  token: null,
  authenticated: false
};
//TrySingup and TrySignin are not in the reducer because they are http requests which are handeld by the
//auth.effects.ts
export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
