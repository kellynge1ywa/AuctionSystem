import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut} from '@fortawesome/free-solid-svg-icons';
import { Art, ArtResponse} from '../../Interface/Art';
import { Store } from '@ngrx/store';
import { appState } from '../../State/AppState/App.state';
import * as artActions from '../../State/Art/Action/Art.actions'
import { SelectAllArts } from '../../State/Art/Selector/Art.selectors';
import { CommonModule } from '@angular/common';
import { ArtService } from '../../Services/art.service';
import { Observable } from 'rxjs';
import { SignOut } from '../../State/User/Action/Users.actions';
import { Navbar } from '../navbar/navbar.component';

@Component({
  selector: 'bidder',
  standalone: true,
  imports: [CommonModule,RouterModule, FontAwesomeModule, Navbar],
  templateUrl: './bidder.component.html',
  styleUrl: './bidder.component.css'
})
export class BidderComponent implements OnInit {
  faSignOut=faSignOut
  Arts:Art[]=[]
  Art!:Art;
  ArtId!:string;
  constructor(private store:Store<appState>, private router:Router,private route:ActivatedRoute, private artService:ArtService){
    
  }

  ngOnInit() {
    this.getAllArts();   

    this.Art=this.route.snapshot.data['Art'];
    this.ArtId=this.Art.id;

    this.store.select(state => state.users).subscribe(console.log)
  }

  getAllArts(){
    this.artService.getAllArts().subscribe(
    Arts =>{
        this.Arts=Arts;
        console.log(this.Arts);
        
      },
      error =>{
        console.log("An error occured",error);
        
      }
    )
  }

  logout(){
    this.store.dispatch(SignOut())
  }

  // getOneArt(artId:string){

  // }

  // ViewDetails(){
  //   this.router.navigate(['/art-details',this.ArtId])
  // }

}
