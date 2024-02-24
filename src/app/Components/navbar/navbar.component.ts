import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { appState } from '../../State/AppState/App.state';
import { SignOut } from '../../State/User/Action/Users.actions';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class Navbar implements OnInit{
  faSignOut=faSignOut

  constructor(private router:Router,private store:Store<appState>){}

  ngOnInit() {
    this.store.select(state => state.users).subscribe(console.log)
      
  }

  logout(){
    this.store.dispatch(SignOut())
    this.router.navigate(['login']);
  }

}
