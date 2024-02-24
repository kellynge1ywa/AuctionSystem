import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserServicesService } from "../../../Services/user-services.service";
import * as userActions from '../Action/Users.actions'
import { catchError, map, mergeMap, of, tap } from "rxjs";

@Injectable()
export class UsersEffects{
    constructor(private actions$:Actions, private Users:UserServicesService){}
    RegisterUser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(userActions.SignUp),
            mergeMap(action=>{
                return this.Users.SignUpUser(action.user).pipe(
                    map(Response=>{
                        
                        return userActions.SignUpSuccess({Response})
                    })
                )
            }),
            catchError(error=>{
                return of(userActions.SignUpError(error))
            })
        )
    });

    //Log in use
    LoginUser$=createEffect(()=>{
        return this.actions$.pipe(
         ofType(userActions.SignIn),
         mergeMap(action=>{
            return this.Users.SignInUser(action.user).pipe(
                map((response)=>userActions.SignInSuccess({ user: action.user})),

            )
         }),
         catchError(error=>{
            return of(userActions.SignInError(error))
        })
        )
    })

}