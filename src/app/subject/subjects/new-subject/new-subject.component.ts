import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
import { SubjectService } from 'src/app/_helpers/services/subject.service';

@Component({
  selector: 'app-new-subject',
  templateUrl: './new-subject.component.html',
  styleUrls: ['./new-subject.component.scss']
})
export class NewSubjectComponent implements OnInit {

  newSubject: FormGroup;
  constructor(
    private fb: FormBuilder,
    private subjectsSubject: SubjectService
  ) {
    this.newSubject = this.fb.group({
      title: ['', Validators.required],
    });
  }

  ngOnInit() {}

  saveSubject() {
    if (this.newSubject.invalid) {
      this.newSubject.markAsDirty();
      return;
    }
    // console.log(this.newSubject.value);
    this.subjectsSubject.createNewSubject(this.newSubject.value).subscribe();
  }

  get s() {
    return this.newSubject.get('title');
  }
}
