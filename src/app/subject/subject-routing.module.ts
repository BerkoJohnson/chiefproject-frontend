import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsHomeComponent } from './subjects/subjects-home/subjects-home.component';
import { NewSubjectComponent } from './subjects/new-subject/new-subject.component';
import { AddPeriodComponent } from './subjects/add-period/add-period.component';
import { ViewSubjectComponent } from './subjects/view-subject/view-subject.component';
import { EditSubjectComponent } from './subjects/edit-subject/edit-subject.component';
import { RemoveSubjectComponent } from './subjects/remove-subject/remove-subject.component';
import { AssignTeacherComponent } from './subjects/assign-teacher/assign-teacher.component';

const ROUTES: Routes = [
  {
    path: '',
    component: SubjectsComponent,
    children: [
      { path: '', component: SubjectsHomeComponent },
      { path: 'new', component: NewSubjectComponent },
      {
        path: ':id',
        children: [
          { path: '', component: ViewSubjectComponent },
          { path: 'update', component: EditSubjectComponent },
          {
            path: 'periods',
            component: AddPeriodComponent
          },
          { path: 'assign-teacher', component: AssignTeacherComponent },
          { path: 'remove-subject', component: RemoveSubjectComponent }
        ]
      }
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
