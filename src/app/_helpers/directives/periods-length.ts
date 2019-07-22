import {FormArray, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const periodsLength: ValidatorFn = (form: FormGroup): ValidationErrors | null => {
  const periods = form.get('periods') as FormArray;

  return !(periods.controls.length >= 1) ? {periodsLength: true} : null;
};
