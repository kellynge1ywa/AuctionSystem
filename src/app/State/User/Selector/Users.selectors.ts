import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "../Reducer/Users.reducer";

export const UserState=createFeatureSelector<UsersState>('users');

//Registration
export const RegisterSuccess=createSelector(UserState,(state)=>state.Response);
export const RegisterError=createSelector(UserState,(state)=>state.Fail);

//Sign in 
export const LoginSuccess=createSelector(UserState,(state)=>state.user);
export const LoginError=createSelector(UserState,(state)=>state.Fail);

//Get role
export const selectRole=createSelector(UserState,(state:UsersState)=>state.user);