import {FormArray, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const contactsLength: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const contacts = control.get('contacts') as FormArray;

  return !(contacts.controls.length >= 1) ? {contactsLength: true} : null;
};

export const studentContactsLength: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const contacts = control.get('contacts') as FormArray;

  return !(contacts.controls.length >= 1) ? {contactsLength: true} : null;
};

export const guardianContactsLength: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const contacts = control.get('guardian.contacts') as FormArray;

  return !(contacts.controls.length >= 1) ? {guardianContactsLength: true} : null;
};

export const subjectsLength: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const subjects = control.get('subjects') as FormArray;

  return !(subjects.controls.length >= 1) ? {subjectLength: true} : null;
};

