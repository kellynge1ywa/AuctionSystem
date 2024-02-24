import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { AddArt, Art, ArtResponse } from '../Interface/Art';
import { TokenService } from '../Authentication/token.service';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private allArts= new BehaviorSubject<Art[]>([]);
  arts$:Observable<Art[]>=this.allArts.asObservable();
 

  constructor(private tokenS:TokenService,private http:HttpClient) { }

  private createAuthorizationHeader(): HttpHeaders {
    const token = this.tokenS.getToken();
    if (!token) {
     
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getAllArts(){
    return this.http.get<{result:Art[]}>('https://localhost:7276/api/Arts',{headers:this.createAuthorizationHeader()}).pipe(
      map(res => res.result)
    )
      
      
    }
    getOneArt(Id:string){
      return this.http.get<{result:Art}>(`https://localhost:7276/api/Arts/${Id}`,{headers:this.createAuthorizationHeader()}).pipe(
        map(res => res.result)
      )
  
    }

    getUserArts(){
      return this.http.get<{result:Art[]}>(`https://localhost:7276/api/Arts/UserArts`,{headers:this.createAuthorizationHeader()}).pipe(
        map(res => res.result)
      )
  
    }

    AddArt(art:AddArt){
      return this.http.post<{result: ArtResponse}>('https://localhost:7276/api/Arts',art,{headers:this.createAuthorizationHeader()});

    }

  }

  

