https://github.com/ngrx/store

Converting Project to NGRX
1.npm install npm install @ngrx/core @ngrx/store@2.2.3 --save
2.creating reducer and intial state for the 'movie feature
3.create actions for the movie feature
4.store both files under 'ngrx' folder
5.import StoreModule.provideStore() from @ngrx/store in the app module  - insert to provideStore an Object with key= name of the partialStore, value= name of the reducer
NOTE - if the spread operator (...) not working and causing errors - its because your project typescript version is old