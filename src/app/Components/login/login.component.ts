import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import * as userActions from '../../State/User/Action/Users.actions';
import { AuthService } from '../../Authentication/auth.service';
import { appState } from '../../State/AppState/App.state';
import { LoginUser } from '../../Interface/User';
import { TokenService } from '../../Authentication/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  constructor(
    private router: Router,
    private store: Store<appState>,
    private token: TokenService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.loginform.valid) {
      try {
        this.auth.OnLogin(this.loginform.value).subscribe({
          next: (value) => {
            const user = value.result.user;
            const roles = user.roles;
            const role = roles?.[0];

            this.store.dispatch(userActions.SignIn({ user }))
            console.log(user);
            //Kelly@2024

            switch (role.name) {
              case 'Seller':
                this.router.navigate(['/seller']);
                break;
              case 'Admin':
                this.router.navigate(['/admin']);
                break;
              case 'Bidder':
                this.router.navigate(['/bidder']);
                break;  
              default:
                this.router.navigate(['/home']);
                break;
            }
          },
        });
      } catch (error) {
        console.error('SignIn failed', error);
      }
    } else {
      alert('Please fill the  form');
    }
  }

  // onSubmit(user:LoginUser){
  //   if(this.loginform.valid && user && user.email && user.password){

  //     try{

  //       this.auth.OnLogin(user).subscribe()
  //         if(role==='Bidder'){

  //           this.router.navigate(['/bidder'])

  //         } else if(role==="Seller"){
  //           this.router.navigate(['/seller'])
  //         }else if(role==="Admin"){
  //           this.router.navigate(['/admin'])
  //         }else{
  //           this.router.navigate(['/home'])
  //         }
  //       })
  //     } catch (error){
  //       console.error("SignUp failed", error);
  //     }
  //   }else{
  //     alert("Invalid details!!")
  //   }

  // }
}
