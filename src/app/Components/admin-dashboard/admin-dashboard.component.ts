import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRemove, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { ArtService } from '../../Services/art.service';
import { Art } from '../../Interface/Art';
import { CommonModule } from '@angular/common';
import { SignOut } from '../../State/User/Action/Users.actions';
import { Store } from '@ngrx/store';
import { appState } from '../../State/AppState/App.state';

@Component({
  selector: 'admin-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule, FontAwesomeModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
  faSignOut=faSignOut
  faRemove= faRemove
  Arts:Art[]=[]
  constructor(private router:Router,private artService:ArtService, private store:Store<appState>){}

  ngOnInit() {
    this.getAllArts();   
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
    this.router.navigate(['login']);
  }



}
