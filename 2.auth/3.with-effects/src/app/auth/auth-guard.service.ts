import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromApp.AppState>) {}
  /*canActivate can also return Observable<boolean> (not only boolean)
  */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth') //hook to the authReducer( ~state)
      .take(1) //observable will complete after one value
      .map((authState: fromAuth.State) => {//map the observable<authState> to Observable<boolean>
      return authState.authenticated;
    });
  }
}
