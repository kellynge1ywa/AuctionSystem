import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { UserServicesService } from '../../Services/user-services.service';
import { Store } from '@ngrx/store';
import { appState } from '../../State/AppState/App.state';
import { User } from '../../Interface/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [CommonModule,RouterModule, FontAwesomeModule],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {
  faSignOut=faSignOut;
  Users:User[]=[]

  constructor(private store:Store<appState>, private router:Router, private userService:UserServicesService){
    
  }

  ngOnInit() {
    this.getAllUsers();   
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
    Users =>{
        this.Users=Users;
        console.log(this.Users);
        
      },
      error =>{
        console.log("An error occured",error);
        
      }
    )
  }


}
