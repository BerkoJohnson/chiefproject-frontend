import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectRoutingModule } from './subject-routing.module';
import { AddPeriodComponent } from './subjects/add-period/add-period.component';
import { AssignTeacherComponent } from './subjects/assign-teacher/assign-teacher.component';
import { EditSubjectComponent } from './subjects/edit-subject/edit-subject.component';
import { NewSubjectComponent } from './subjects/new-subject/new-subject.component';
import { RemoveSubjectComponent } from './subjects/remove-subject/remove-subject.component';
import { ViewSubjectComponent } from './subjects/view-subject/view-subject.component';
import { ListOfSubjectsComponent } from './subjects/list-of-subjects/list-of-subjects.component';
import { SubjectsHomeComponent } from './subjects/subjects-home/subjects-home.component';

@NgModule({
  declarations: [
    SubjectsComponent,
    AddPeriodComponent,
    AssignTeacherComponent,
    EditSubjectComponent,
    ListOfSubjectsComponent,
    NewSubjectComponent,
    RemoveSubjectComponent,
    ViewSubjectComponent,
    SubjectsHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
