import { Component, OnInit } from '@angular/core';
import { Navbar } from '../navbar/navbar.component';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { Art } from '../../Interface/Art';
import { Store } from '@ngrx/store';
import { appState } from '../../State/AppState/App.state';
import * as artActions from '../../State/Art/Action/Art.actions'
import { SelectAllArts } from '../../State/Art/Selector/Art.selectors';
import { ArtService } from '../../Services/art.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,Navbar, FontAwesomeModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  fauser=faUser
  Arts:Art[]=[]

  constructor(private store:Store<appState>, private router:Router, private artService:ArtService){
    
  }

  ngOnInit() {
    this.getAllArts();   
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



}
