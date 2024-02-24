import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { LoginResponse, LoginUser } from '../Interface/User';
import { map } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private token:TokenService, private http:HttpClient) { }
  OnLogin(user:LoginUser){
    return this.http.post<LoginResponse>('https://localhost:7151/api/Users/login',user)
    .pipe(
      map((response)=>{
        if(response.result.token){
          
          this.token.setToken(response.result.token);
          // localStorage.setItem('userId',response.result.user.id);
          // localStorage.setItem('userRole',response.result.user.roles[0].name)
          
        }
        localStorage.setItem('user', JSON.stringify(response.result.user))
        return response;
      })
    )
  }

 

  
}
