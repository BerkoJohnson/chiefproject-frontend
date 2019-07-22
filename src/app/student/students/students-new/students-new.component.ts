import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/_helpers/services/student.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { contactsLength, guardianContactsLength } from 'src/app/_helpers/directives/contacts-length';

@Component({
  selector: 'app-students-new',
  templateUrl: './students-new.component.html',
  styleUrls: ['./students-new.component.scss']
})
export class StudentsNewComponent implements OnInit {
  newStudentForm: FormGroup;

  constructor(private fb: FormBuilder, private studentsService: StudentService) {
    this.newStudentForm = this.fb.group({
      name: ['', Validators.required],
      contacts: this.fb.array([]),
      guardian: this.fb.group({
        name: '',
        contacts: this.fb.array([])
      }),
      date_registered: ['', Validators.required],
    }, { validators: [contactsLength, guardianContactsLength] });
  }

  get s_c() {
    return this.newStudentForm.get('contacts') as FormArray;
  }

  get g_c() {
    return this.newStudentForm.get('guardian.contacts') as FormArray;
  }

  get n() {
    return this.newStudentForm.get('name');
  }

  get dg() {
    return this.newStudentForm.get('date_registered');
  }

  get gn() {
    return this.newStudentForm.get('guardian.name');
  }


  ngOnInit() {
  }


  saveStudent() {
    if (this.newStudentForm.invalid) {
      this.newStudentForm.markAsDirty();
      return;
    }
    this.studentsService.createNewStudent(this.newStudentForm.value).subscribe(p => {
      if (p) {
        this.newStudentForm.reset();
      }
    });
  }

  addStudentContact() {
    this.s_c.push(this.fb.control('', [Validators.required, Validators.pattern('^[0-9]{10}$')]));
  }

  removeStudentContact(i) {
    this.s_c.removeAt(i);
  }

  addGuardianContact() {
    this.g_c.push(this.fb.control('', [Validators.required, Validators.pattern('^[0-9]{10}$')]));
  }

  removeGuardianContact(i) {
    this.g_c.removeAt(i);
  }

}
