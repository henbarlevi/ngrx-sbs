import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap'
//NGRX
import {AppState } from '../ngrx/app.reducers';
import { Store } from '@ngrx/store';
import{authState} from '../auth/ngrx/auth.reducers';

@Injectable()
//Using interceptor in order to set the auth token on each request
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    return this.store.select('auth')
    .take(1)
    .switchMap((authState:authState)=>{
      const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
      return next.handle(copiedReq);
    })
   
    // return null;
  }
}



// ================= OLD ==============================
// import { AuthService } from '../auth/auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('Intercepted!', req);
//     // const copiedReq = req.clone({headers: req.headers.set('', '')});
//     const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
//     return next.handle(copiedReq);
//     // return null;
//   }
// }
