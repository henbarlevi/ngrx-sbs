import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesModule} from './movies/movies.module';
import { appRouting} from './app.routing'
//NGRX
import {StoreModule} from '@ngrx/store';
//reducers
import {MoviesReducer} from './movies/ngrx/movies.reducers';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     //routing order matters:
     MoviesModule,
     appRouting,
     //ngrx:set app the AppStore
     StoreModule.provideStore({movies:MoviesReducer}) // - OLD VERSION - IN 4.0 youll use .forRoot() instead of provideStore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
