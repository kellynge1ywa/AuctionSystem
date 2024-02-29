import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../Authentication/token.service';
import { Observable } from 'rxjs';
import { AddPaymentDto, ResponseDto } from '../Interface/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private BaseUrl="https://localhost:7259/api/Payment";

  constructor(private tokenS:TokenService,private http:HttpClient) { }
  private createAuthorizationHeader(): HttpHeaders {
    const token = this.tokenS.getToken();
    if (!token) {
     
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  AddPayment(BidId:string):Observable<{result:ResponseDto}>{
    return this.http.post<{result:ResponseDto}>(`${this.BaseUrl}?BidId=${BidId}`,BidId,{headers:this.createAuthorizationHeader()})

  }
}
