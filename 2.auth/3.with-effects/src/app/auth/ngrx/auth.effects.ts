import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()// USE  @Effect({dispatch: false}) if you dont want to invoke action afterwards
  authSignup = this.actions$ // this.actions$ observable that emit invoked actions
    .ofType(AuthActions.TRY_SIGNUP) //when TRY_SIGNUP invoked
    //map forward only the payload (action.type not needed)
    .map((action: AuthActions.TrySignup) => {
      return action.payload;
    })
    //send http request of 'createUserWithEmailAndPassword'
    .switchMap((authData: {username: string, password: string}) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    })
    //send http request of 'createUserWithEmailAndPassword'    
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    //if all successful - return  array of actions that will be invoked one after another afterwards
    .mergeMap((token: string) => {
      return [
        {
          type: AuthActions.SIGNUP
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    });

  @Effect()
  authSignin = this.actions$
    .ofType(AuthActions.TRY_SIGNIN)
    .map((action: AuthActions.TrySignup) => {
      return action.payload;
    })
    .switchMap((authData: {username: string, password: string}) => {
      return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      this.router.navigate(['/']); //you can also navigate here
      return [
        {
          type: AuthActions.SIGNIN
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    });

  @Effect({dispatch: false})
  authLogout = this.actions$
    .ofType(AuthActions.LOGOUT)
    .do(() => {
      this.router.navigate(['/']);
    });
    //INJECT Actions service
  constructor(private actions$: Actions, private router: Router) {
  }
}
