import {AbstractControl} from '@angular/forms';

export function imageValidator(type: string, size: number) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return null;
  };
}
