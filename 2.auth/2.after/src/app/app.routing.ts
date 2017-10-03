import { Routes, RouterModule } from '@angular/router';
export const routing = RouterModule.forRoot([
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
]);


// { path: '', redirectTo: 'signin', pathMatch: 'full' },
// { path: 'eager', component: EagerComponent },
// //lazy-module/lazy.module - the folder path
// //, #LazyModule -#ClassName :
// { path: 'lazy', loadChildren: './lazy-module/lazy.module#LazyModule' }//when route is 'lazy' -loading the lazy module