import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { BidService } from '../../Services/bid.service';
import { CommonModule } from '@angular/common';
import { Bid } from '../../Interface/Bid';
import { BidsFilterPipe } from '../../Pipes/bids-filter.pipe';
import { Navbar } from '../navbar/navbar.component';
import { PaymentsService } from '../../Services/payments.service';
import { response } from 'express';
import { AddPaymentDto } from '../../Interface/Payment';



@Component({
  selector: 'app-my-bids',
  standalone: true,
  imports: [CommonModule,RouterModule,FontAwesomeModule, BidsFilterPipe,Navbar],
  templateUrl: './my-bids.component.html',
  styleUrl: './my-bids.component.css'
})
export class MyBidsComponent implements OnInit {
  faSignOut=faSignOut
  Bids:Bid[]=[];
  Bid!:Bid;
  BidId!:string;
  newPayment!:AddPaymentDto;
  selectedFilter: string = 'all';
  ActiveBids:boolean=true;
  SelectedBidId!:string ;

  constructor(private bidServices:BidService,private paymentService:PaymentsService,private router:Router ,private route:ActivatedRoute){}

  ngOnInit(): void {
    // this.Bid=this.route.snapshot.data['Bid'];
    // this.BidId=this.Bid.id;
   const BidId=this.route.snapshot.paramMap.get('BidId');


    this.GetBidderBids();
    
      
  }
  //Filter
  OnFilterChange(selectedFilter:string){
    this.selectedFilter=selectedFilter;

  }
  GetBidderBids(){
    this.bidServices.getBidderBids().subscribe(
      (Bids)=>{
        this.Bids=Bids;
      }
    )

  }

  SelectBid(bid:Bid){
    this.SelectedBidId=bid.id;

  }
 

  AddPayment(bidId:string){
    
    // const NewPayment:AddPaymentDto={bidId:this.SelectedBidId}
    this.paymentService.AddPayment(bidId).subscribe(
      (response)=>{
        if(response.result.success){
          
          console.log("You have added a payment",response);
          this.router.navigate(['/payments'])
        }
      }
    )

  }

  MakePayment(){
    // this.paymentService.AddPayment(this.BidId).subscribe(
    //   (response)=>{
    //     console.log("You have added a payment",response);
    //   }
    // )

  }


 
  

}
