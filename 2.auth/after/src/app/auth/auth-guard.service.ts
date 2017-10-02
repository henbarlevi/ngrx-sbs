import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
//import { AuthService } from './auth.service';
//NGRX
import {AppState} from '../ngrx/app.reducers';
import { authState} from './ngrx/auth.reducers';
import{ Store} from '@ngrx/store';
@Injectable()
export class AuthGuard implements CanActivate {

 
  constructor(private store:Store<AppState>) {} //constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
    let authState:Observable<authState> = this.store.select('auth');
    return authState.map((authState:authState)=>{
      return authState.authenticated;
    });
    //return this.authService.isAuthenticated();
  }
}
