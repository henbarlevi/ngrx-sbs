import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule} from './auth/auth.module';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
//ngrx
import {reducers} from './ngrx/app.reducers';
import {StoreModule} from '@ngrx/store';
  //effects
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './auth/ngrx/auth.effects';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    routing,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
