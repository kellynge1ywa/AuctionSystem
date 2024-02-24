import { AbstractControl } from '@angular/forms';

export class AgeValidators {
  static dobValidator(control: AbstractControl): { [key: string]: boolean } | null {
   
    const enteredDate = new Date(control.value);

    
    const minAge = 18;

    
    const minAgeDate = new Date();
    minAgeDate.setFullYear(minAgeDate.getFullYear() - minAge);

    
    if (enteredDate > minAgeDate) {
      return { ageInvalid: true };
    }

   
    return null;
  }
}
