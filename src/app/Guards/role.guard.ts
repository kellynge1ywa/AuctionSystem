import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { appState } from '../State/AppState/App.state';
import { Observable } from 'rxjs';



export const roleGuardsGuard = (role: string): CanActivateFn => {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
      const store = inject(Store<appState>);
      return store.select((state: appState) => state.users.user?.roles?.[0]?.name === role);
    };
  };


// export const roleGuard= (role:string): CanActivateFn=>{(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
//   const store = inject(Store<appState>)
//   return store.select((state: appState) => state.users.user?.roles?.[0]?.name)
  
//   .subscribe(userRole => {
//     return userRole === role;
//   })

  
// }

// }

