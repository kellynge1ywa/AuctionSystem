import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginResponse } from '../Interface/User';
import { TokenService } from '../Authentication/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenS:TokenService){}

 Authenticate(response:LoginResponse){
  if(response.result.token){
    this.tokenS.setToken(response.result.token);
    this.tokenS.setUserInfo(response.result.user.id,response.result.user.roles[0].name);
  }

 }
  
  // public IAuthenticated(LoggedIn:LoginResponse):boolean{

  //   const user= 
  //   const token=localStorage.getItem('authToken');
  //   const role=LoggedIn.result.;
  //   // const userRole=user.result.user.role;

  //   if(!token && ){
  //     return false;
  //   }
    
  //   const helper=new JwtHelperService();
  //   const isExpired=helper.isTokenExpired(token);
  //   return !isExpired && role ;

  // }
 
}
