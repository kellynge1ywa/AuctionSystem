import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Art } from '../../Interface/Art';
import { ArtService } from '../../Services/art.service';
import { AddBidDto, Bid } from '../../Interface/Bid';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BidService } from '../../Services/bid.service';

@Component({
  selector: 'app-view-art',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule, RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './view-art.component.html',
  styleUrl: './view-art.component.css'
})
export class ViewArtComponent implements OnInit {
  faSignOut=faSignOut

  Art!:Art;
  Bid!:Bid
  AddBid!:AddBidDto;
  bidAmount:number=0;
  artId!:string;
  showBidInput:boolean=false;
  PlaceBidInput!:FormGroup
  constructor(private artService:ArtService,private bidServices:BidService, private route:ActivatedRoute){}

  ngOnInit() {
  
    this.artId=this.route.snapshot.params['id'];
    this.getOneArt(this.artId); 
    this.getUserBid(this.artId);
    this.getHighestBidAmount(this.artId);
    //Bidding
    this.PlaceBidInput=new FormGroup({
      bidAmount:new FormControl('',Validators.required)
    })  
    //
    // this.artId=this.route.snapshot.paramMap.get('artId');
  }

  getOneArt(artId:string){
    this.artService.getOneArt(artId).subscribe(
    (Art:Art) =>{
        this.Art=Art;
        console.log(this.Art);
        
      },
      error =>{
        console.log("An error occured",error);
        
      }
    )
  }

  OpenAndCloseBid(){
    this.showBidInput=!this.showBidInput;
    

  }
  PlaceYourBid(bidAmount:number){
    const newBid:AddBidDto={bidAmount:bidAmount};
    if(this.bidAmount < this.Art.startingPrice){
      alert("Bid amount should be higher than the starting price!!");
      return;
    }
    
    try{
      this.bidServices.PlaceBid(this.artId, newBid).subscribe(
        (response)=>{
          console.log(newBid)
          if(response.result.success){
            this.bidAmount=response.result.result.bidAmount;
            console.log(this.bidAmount)
            this.Art.highestBidAmount=response.result.result.bidAmount;
            this.showBidInput=false;
            
          } 
          
  
        }
      )

    } catch(error){
      console.error("Error adding an art", error);

    }

  }
  Close(){
    this.showBidInput=false;
    this.AddBid.bidAmount=0;

  }

  getUserBid(artId:string){
    this.bidServices.getBidByArtIdandUserId(artId).subscribe(
      (response)=>{
        this.bidAmount=response.bidAmount;
        console.log(response.bidAmount)

      }
    )

  }

  getHighestBidAmount(artId:string){
    this.bidServices.getHighestBidAmount(artId).subscribe(
      (response)=>{
        this.Art.highestBidAmount=response.highestBidAmount;
        console.log(response.bidAmount)

      }
    )

  }


}
