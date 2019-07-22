import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import { ListPayload, TeacherService } from 'src/app/_helpers/services/teacher.service';
import { ISubject, SubjectService } from 'src/app/_helpers/services/subject.service';

@Component({
    selector: 'app-assign-teacher',
    templateUrl: './assign-teacher.component.html',
    styleUrls: ['./assign-teacher.component.scss']
})
export class AssignTeacherComponent implements OnInit {
    assignForm: FormGroup;
    teachers$: Observable<ListPayload>;
    subject$: Observable<ISubject>;

    constructor(
        private fb: FormBuilder,
        private teachersService: TeacherService,
        private subjectService: SubjectService
    ) {
        this.assignForm = this.fb.group({
            teacherID: ['', Validators.required]
        });
    }

    get tID() {
        return this.assignForm.get('teacherID');
    }

    ngOnInit() {
        this.teachers$ = this.teachersService.teachers$;
        this.subject$ = this.subjectService.subject$;
    }

    submitAssignment(id: string) {
        if (!this.assignForm.valid) {
            return this.assignForm.markAsDirty();
        }

        // console.log(this.subject._id, this.assignForm.value);
        this.subjectService.assignTeacher(id, this.assignForm.value).subscribe();
    }
}
