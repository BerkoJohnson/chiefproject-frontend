import {AbstractControl, ValidatorFn} from '@angular/forms';

export function imageSize(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    console.log(control.value);
    return null;
  };
}
