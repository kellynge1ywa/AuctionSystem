import { createAction, props } from "@ngrx/store";
import { LoginResponse, LoginUser, RegisterUser, RegistrationSuccess, User } from "../../../Interface/User";

//registration
export const SignUp= createAction('[users]-Register',props<{user:RegisterUser}>())
export const  SignUpSuccess= createAction('[users]-RegistrationSuccess',props<{Response:RegistrationSuccess}>())
export const SignUpError=createAction('[users]-RegistrationError',props<{Fail:string}>())

//Login
export const SignIn=createAction('[usersLogin]-Login',props<{user:User}>())
export const SignInSuccess=createAction('[usersLogin]-LoginSuccess',props<{user:User}>())
export const SignInError=createAction('[usersLogin]-LoginError',props<{Fail:string}>())
export const SignOut=createAction('[usersLogin] Logout')