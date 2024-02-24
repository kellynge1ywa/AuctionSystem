import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { StrongPassword } from '../../Utilities/StrongPassword';
import { AgeValidators } from '../../Utilities/AgeCheck';
import { Store } from '@ngrx/store';

import * as userActions from '../../State/User/Action/Users.actions';
import { appState } from '../../State/AppState/App.state';
import { RegisterUser } from '../../Interface/User';
import { UserServicesService } from '../../Services/user-services.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent implements OnInit {
  registrationform!: FormGroup;
  constructor(private router: Router, private store: Store<appState>,private user:UserServicesService) {}

  ngOnInit() {
    this.registrationform = new FormGroup(
      {
        fullname: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required]),
        dob: new FormControl('', [
          Validators.required,
          AgeValidators.dobValidator,
        ]),
        role: new FormControl('', [Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(StrongPassword),
        ]),
        confirmpassword: new FormControl('', Validators.required),
      },
      {
        validators: this.passwordMatch,
      }
    );
  }

  passwordMatch(control: AbstractControl) {
    return control.get('password')?.value ===
      control.get('confirmpassword')?.value
      ? null
      : { mismatch: true };
  }

  get passwordFormField() {
    return this.registrationform.get('password');
  }

  onSubmit() {
    if (this.registrationform.valid) {
      try {
        const userdata: RegisterUser = this.registrationform.value;
        console.log(userdata);

        this.user.getAllUsers().subscribe(users =>{
          if(users.length ===0){
            userdata.Role="Admin"
          }
        })
        this.store.dispatch(userActions.SignUp({ user: userdata }));
        
        
        this.registrationform.reset();
        this.router.navigate(['login'])
      } catch (error) {
        console.error('SignUp failed', error);
      }
    }
  }
}
