import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent, StudentService } from 'src/app/_helpers/services/student.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { ISubject, SubjectService } from 'src/app/_helpers/services/subject.service';
import { subjectsLength } from 'src/app/_helpers/directives/contacts-length';

@Component({
  selector: 'app-students-register-subjects',
  templateUrl: './students-register-subjects.component.html',
  styleUrls: ['./students-register-subjects.component.scss']
})
export class StudentsRegisterSubjectsComponent implements OnInit {
  registerSubjectForm: FormGroup;
  subjectsList: ISubject[];
  selectedSubjects: string[] = [];
  student: IStudent;
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  get subjects() {
    return this.registerSubjectForm.get('subjects') as FormArray;
  }

  get month() {
    return this.registerSubjectForm.get('month');
  }

  ngOnInit() {
    this.registerSubjectForm = this.fb.group({
      month: ['', Validators.required],
      subjects: this.fb.array([])
    }, {validators: [subjectsLength]});

    this.subjectService.allSubjects$.subscribe(s => this.subjectsList = s);

    this.route.paramMap.pipe(
      switchMap(d => {
        return this.studentService.getStudent(d.get('id'));
      })
    ).subscribe(student => this.student = student);
  }

  addSubject() {
    this.subjects.push(this.fb.control('', [Validators.required]));
  }

  selectedSubject(c: AbstractControl) {
    const t = this.subjects.controls.filter(k => k.value === c.value).length;
    if (t > 1) {
      c.markAsDirty({onlySelf: true});
      c.setErrors({
        addAlready: true
      }, {emitEvent: true});
      this.registerSubjectForm.setErrors({
        subjectSelectedAlready: true
      }, {
        emitEvent: true
      });
    }
  }

  removeSubject(i) {
    this.subjects.removeAt(i);
  }

  submitSubjects(id: string) {
    if (!this.registerSubjectForm.valid) {
      this.registerSubjectForm.markAsDirty({onlySelf: true});
    }
    this.studentService.register({studentID: id, ...this.registerSubjectForm.value}).subscribe(d => {
      this.registerSubjectForm.reset();
      this.router.navigate(['/students', id], {relativeTo: this.route});
    });
  }

}
