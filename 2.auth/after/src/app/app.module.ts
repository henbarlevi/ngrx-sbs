import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule} from './auth/auth.module';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
//ngrx
import {reducers} from './ngrx/app.reducers';
import {StoreModule} from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    routing,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
