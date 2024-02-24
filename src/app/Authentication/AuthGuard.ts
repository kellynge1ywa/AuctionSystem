import { Injectable } from "@angular/core";
import { AuthService } from "../Services/auth.service";
import { Router } from "@angular/router";


@Injectable({
    providedIn:'root'
})

export class AuthGuard{
    constructor (private auth:AuthService, private router:Router){}

    canActivate():boolean{
        if(this.auth.IAuthenticated()){
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }
    }
}

