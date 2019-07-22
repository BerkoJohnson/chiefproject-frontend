import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentsHomeComponent } from './students/students-home/students-home.component';
import { StudentsNewComponent } from './students/students-new/students-new.component';
import { StudentsViewComponent } from './students/students-view/students-view.component';
import { StudentsUpdateComponent } from './students/students-update/students-update.component';
import { StudentsRegisterSubjectsComponent } from './students/students-register-subjects/students-register-subjects.component';
import { StudentsRemoveComponent } from './students/students-remove/students-remove.component';

const ROUTES: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      { path: '', component: StudentsHomeComponent },
      { path: 'new', component: StudentsNewComponent },
      {
        path: ':id',
        children: [
          { path: '', component: StudentsViewComponent },
          { path: 'update', component: StudentsUpdateComponent },
          {
            path: 'register',
            component: StudentsRegisterSubjectsComponent
          },
          { path: 'remove-student', component: StudentsRemoveComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
