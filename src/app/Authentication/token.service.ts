import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { jwtDecode } from 'jwt-decode';
import { appState } from '../State/AppState/App.state';



interface DecodedToken {
  sub: string;
  roles: string[];
  // Other relevant claims
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private localStorageKey='token';
 

  constructor(private store:Store<appState>) { }

  getToken():string | null{
    return localStorage.getItem(this.localStorageKey)
  }
  setToken(token:string ):void{
    localStorage.setItem(this.localStorageKey,token);
  }
  isLoggedIn():boolean{
    return !!this.getToken() ?? false;

  }

  getUserId(){
    this.store.select((state:appState)=> state.users.user?.id);
    
  }

  getUserRole(){
    return localStorage.getItem('userRole')
  }

  setUserInfo(userId: string, userRole: string) {
    localStorage.setItem('userId', userId);
    localStorage.setItem('userRole', userRole);
  }

  logOut():void{
    localStorage.removeItem(this.localStorageKey);

  }


  //Get roles
  getRoles():string[] {
    const token=this.getToken();
    if(!token){
      return [];
    }
    try
    {
      const decodedToken=jwtDecode<DecodedToken>(token);
      return decodedToken.roles
    } catch(error){
      console.error('Error decoding token:',error)
      return [];
    }


  }
  //See if user has role
  hasRole(role:string):boolean{
    const aroles=this.getRoles();
    return aroles && aroles.includes(role);
  }


}
