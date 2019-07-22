import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const confirmPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const cpassword = control.get('confirmPassword');

  return password && cpassword && password.value !== cpassword.value ? {confirmPassword: true} : null;
};
