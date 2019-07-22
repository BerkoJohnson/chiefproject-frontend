import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPassword } from '../../../_helpers/directives/confirm-password';
import { contactsLength } from '../../../_helpers/directives/contacts-length';
import { TeacherService } from 'src/app/_helpers/services/teacher.service';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.scss']
})
export class NewTeacherComponent implements OnInit {
  newTeacherForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private teachersService: TeacherService
  ) {
    this.newTeacherForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: '',
        contacts: this.fb.array([]),
        password: '',
        confirmPassword: ''
      },
      { validators: [confirmPassword, contactsLength] }
    );
  }

  get contacts() {
    return this.newTeacherForm.get('contacts') as FormArray;
  }

  get fc() {
    return this.newTeacherForm.controls;
  }

  get n() {
    return this.newTeacherForm.get('name');
  }

  get p() {
    return this.newTeacherForm.get('password');
  }

  get e() {
    return this.newTeacherForm.get('email');
  }

  get cp() {
    return this.newTeacherForm.get('confirmPassword');
  }

  ngOnInit() {}

  save() {
    if (this.newTeacherForm.invalid) {
      this.newTeacherForm.markAsDirty();
      return;
    }
    console.log(this.newTeacherForm.value);
    this.teachersService
      .createNewTeacher(this.newTeacherForm.value)
      .subscribe();
  }

  addControl() {
    this.contacts.push(
      this.fb.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ])
    );
  }

  removeContact(i) {
    this.contacts.removeAt(i);
  }
}
