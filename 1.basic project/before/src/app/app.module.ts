import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesModule} from './movies/movies.module';
import { appRouting} from './app.routing'
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
     appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
