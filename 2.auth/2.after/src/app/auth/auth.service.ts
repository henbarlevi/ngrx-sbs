import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
//NGRX
import { Store } from '@ngrx/store';
import * as AuthActions from './ngrx/auth.actions';
import { AppState } from '../ngrx/app.reducers';
@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router, private store: Store<AppState>) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((token) => this.store.dispatch(new AuthActions.SingUp()))
      .catch(
      error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      response => {
        this.store.dispatch(new AuthActions.SingIn())
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken()
          .then(
          (token: string) => this.store.dispatch(new AuthActions.SetToken( this.token ))
          )
      }
      )
      .catch(
      error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.Logout());
  }


}
