import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse,LoginUser, RegisterUser, RegistrationSuccess, User } from '../Interface/User';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) { }

  SignUpUser(newUser:RegisterUser):Observable<RegistrationSuccess>{
    return this.http.post<RegistrationSuccess>('https://localhost:7151/api/Users/register',newUser);

  }
  SignInUser(User:LoginUser):Observable<LoginResponse>{
    return this.http.post<LoginResponse>('https://localhost:7151/api/Users/login',User);
  }

  getAllUsers(){
    return this.http.get<{result:User[]}>('https://localhost:7151/api/Users').pipe(
      map(res => res.result)
    )
      
      
    }
}
