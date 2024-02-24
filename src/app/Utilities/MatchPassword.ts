import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export default class Validation{
    static MatchPassword:ValidatorFn= (control: AbstractControl):ValidationErrors | null=>{
        let password= control.get('password');
        let confirmpassword=control.get('confirmpassword');
        if(password && confirmpassword && password?.value != confirmpassword?.value){
            return {
                passwordmatcherror:true
            }

        }
        return  null;

    }
    
    
    
}
// export const MatchPassword:ValidatorFn