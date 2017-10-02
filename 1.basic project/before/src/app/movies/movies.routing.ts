import { RouterModule } from '@angular/router'; //import router module
import {  MoviesComponent} from './movies.component';
export const moviesRouting = RouterModule.forChild([
    {
        path: 'movie',
        component: MoviesComponent,

    },

]);


//==========SNIPPETS
// path: 'eager',
// component: EagerComponent,
// //canActivate: [LoggedInGuard], //the user can go to this route only if the LoggedInGuard allow it
//    children: [
//         {path: '', redirectTo: 'eager-nested', pathMatch: 'full'},
//         {path: 'eager-nested', component: EagerNestedComponent}

//     ]