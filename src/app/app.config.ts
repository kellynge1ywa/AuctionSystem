import { APP_INITIALIZER, ApplicationConfig, Inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { Store, provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from './State/User/Effects/Users.effects';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { CategoryEffects } from './State/Category/Effects/Category.effects';
import { userReducers } from './State/User/Reducer/Users.reducer';
import { appState } from './State/AppState/App.state';
import { User } from './Interface/User';
import { SignInSuccess } from './State/User/Action/Users.actions';
import { FilterPipeModule } from 'ngx-filter-pipe';

// import { CategoryReducer } from './State/Category/Reducers/Category.reducers';
// import { ArtEffects } from './State/Art/Effects/Art.effects';
// import { artReducer } from './State/Art/Reducer/Art.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    FilterPipeModule,
    provideHttpClient(withFetch()),
    provideStore(),
    provideStore({ users: userReducers }),
    provideEffects([UsersEffects]),
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<appState>) => {
        const stored = localStorage.getItem('user')

        if(stored){
          const user:User = JSON.parse(stored)
          if(user){
            store.dispatch(SignInSuccess({ user }))
          }
        }
      },
      deps: [Store<appState>],
    },
  ],
};
