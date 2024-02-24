import { createReducer, on } from "@ngrx/store";
import { LoginResponse, RegistrationSuccess, User } from "../../../Interface/User";
import * as userActions from '../Action/Users.actions';

export interface UsersState{
    users:User[],
    Response:RegistrationSuccess,
    user?:User,
    Fail:string
}

export const initialState:UsersState={
    users:[],
    Response:{message:''},
   
    Fail:''
    


}

export const userReducers= createReducer(
    initialState,
    on(userActions.SignUpSuccess, (state,{Response}):UsersState=>{
        return{
            ...state,
            Response,
            Fail:''
        }
    }),
    on(userActions.SignUpError,(state,{Fail}):UsersState=>{
        return{
            ...state,
            Response:{message:''},
            Fail
        }
    }),

    //Sign in
    on(userActions.SignInSuccess, (state,{user}):UsersState=>{
        return{
            ...state,
            user,
            
            Fail:''
        }
    }),
    on(userActions.SignInError,(state,{Fail}):UsersState=>{
        return{
            ...state,
            user: undefined,
            Fail
        }
    }),
    on(userActions.SignOut, state=>{
        localStorage.clear();
        return ({
            ...state,
            user: undefined,
            Fail:''
    
        })
    })


)