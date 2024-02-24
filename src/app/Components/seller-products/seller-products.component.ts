import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { ArtService } from '../../Services/art.service';
import { Art } from '../../Interface/Art';

@Component({
  selector: 'app-seller-products',
  standalone: true,
  imports: [CommonModule,RouterModule, FontAwesomeModule],
  templateUrl: './seller-products.component.html',
  styleUrl: './seller-products.component.css'
})
export class SellerProductsComponent implements OnInit {
  faSignOut=faSignOut;
  Arts:Art[]=[]

  constructor(private router:Router, private artService:ArtService){}

  ngOnInit(): void {
    this.getAllArts();
      
  }

  getAllArts(){
    this.artService.getUserArts().subscribe(
    Arts =>{
        this.Arts=Arts;
        console.log(this.Arts);
        
      },
      error =>{
        console.log("An error occured",error);
        
      }
    )
  }

}
