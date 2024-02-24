import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { appState } from '../State/AppState/App.state';
import { AuthService } from '../Services/auth.service';

import { LoginResponse} from '../Interface/User';
import { LoginSuccess } from '../State/User/Selector/Users.selectors';
import { TokenService } from '../Authentication/token.service';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  const router=inject(Router);
  const store=inject(Store<appState>);
  const auth=inject(TokenService);
  // const user:LoginResponse;
  if(auth.isLoggedIn()){
    return true;

  } else{
    router.navigate(['login']);
     return false;
  }
};

// store.select((state:appState)=>state.users.user?.roles?.[0].name).pipe(
//   take(1),
//   map(userRole=>{
//     if(userRole && auth.isLoggedIn()){
//       return true
//     }else{
//       router.navigate(['login'])
//       return false;
//     }
//   })
// )

// return inject(PermissionsService).canActivate();  store.select((state:appState)=>state.users.user?.roles?.[0].name).pipe(
//   take(1),
//   map(userRole=>{
//     if(userRole && auth.isLoggedIn()){
//       return true
//     }else{
//       router.navigate(['login'])
//       return false;
//     }
//   })
// )

// return inject(PermissionsService).canActivate();
