import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { BidService } from '../../Services/bid.service';
import { CommonModule } from '@angular/common';
import { Bid } from '../../Interface/Bid';
import { BidsFilterPipe } from '../../Pipes/bids-filter.pipe';



@Component({
  selector: 'app-my-bids',
  standalone: true,
  imports: [CommonModule,RouterModule,FontAwesomeModule, BidsFilterPipe],
  templateUrl: './my-bids.component.html',
  styleUrl: './my-bids.component.css'
})
export class MyBidsComponent implements OnInit {
  faSignOut=faSignOut
  Bids:Bid[]=[];
  selectedFilter: string = 'all';
  ActiveBids:boolean=true;

  constructor(private bidServices:BidService){}

  ngOnInit(): void {
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


 
  

}
