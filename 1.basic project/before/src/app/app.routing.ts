import { Routes, RouterModule } from '@angular/router';
export const appRouting = RouterModule.forRoot([
    { path: '', redirectTo: 'movie', pathMatch: 'full' },
    //lazy-module/lazy.module - the folder path
    //, #LazyModule -#ClassName :
    //{ path: 'lazy', loadChildren: './lazy-module/lazy.module#LazyModule' }//when route is 'lazy' -loading the lazy module
]);