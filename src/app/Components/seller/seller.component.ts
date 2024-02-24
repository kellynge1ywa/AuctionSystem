import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { appState } from '../../State/AppState/App.state';
import { SignOut } from '../../State/User/Action/Users.actions';
import { Navbar } from '../navbar/navbar.component';

@Component({
  selector: 'app-seller',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule,Navbar],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css'
})
export class SellerComponent implements OnInit {
  faSignOut=faSignOut

  constructor(private store: Store<appState>){

  }
  ngOnInit(): void {
    this.store.select(state => state.users).subscribe(console.log)
  }

  logout(){
    this.store.dispatch(SignOut())
    
  }
}
