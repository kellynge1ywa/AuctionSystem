import { Injectable } from '@angular/core';
import { AddBidDto, Bid, ResponseDto } from '../Interface/Bid';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../Authentication/token.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  private apiURl='https://localhost:7061/api/Bids';

  constructor(private tokenS:TokenService,private http:HttpClient) { }

  private createAuthorizationHeader(): HttpHeaders {
    const token = this.tokenS.getToken();
    if (!token) {
     
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  PlaceBid(ArtId:string,addBid:AddBidDto):Observable<{result:ResponseDto}>{
    // const url=`${this.apiURl/A}`;
    // const body={};
    return this.http.post<{result:ResponseDto}>(`https://localhost:7061/api/Bids/${ArtId}`,addBid,{headers:this.createAuthorizationHeader()})


  }
  getHighestBidAmount(ArtId:string){
    return this.http.get<{result:Bid}>(`https://localhost:7061/api/Bids/HighestBidAMount/${ArtId}`,{headers:this.createAuthorizationHeader()}).pipe(
      map(res=>res.result)
    )

  }
  getBidByArtIdandUserId(ArtId:string){
    return this.http.get<{result:Bid}>(`https://localhost:7061/api/Bids/existingBid/${ArtId}`,{headers:this.createAuthorizationHeader()}).pipe(
      map(res=>res.result)
    )

  }

  getBidderBids(){
    return this.http.get<{result:Bid[]}>('https://localhost:7061/api/Bids/BidderBids',{headers:this.createAuthorizationHeader()}).pipe(
      map(res => res.result)
    )
  }
}
