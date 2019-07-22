import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers/teachers.component';
import { DeleteTeacherComponent } from './teachers/delete-teacher/delete-teacher.component';
import { TeachersHomeComponent } from './teachers/teachers-home/teachers-home.component';
import { NewTeacherComponent } from './teachers/new-teacher/new-teacher.component';
import { ViewTeacherComponent } from './teachers/view-teacher/view-teacher.component';
import { EditTeacherComponent } from './teachers/edit-teacher/edit-teacher.component';
import { ResignTeacherComponent } from './teachers/resign-teacher/resign-teacher.component';

const ROUTES: Routes = [
  {
    path: '',
    component: TeachersComponent,
    children: [
      { path: '', component: TeachersHomeComponent },
      { path: 'new', component: NewTeacherComponent },
      {
        path: ':id',
        children: [
          { path: '', component: ViewTeacherComponent },
          { path: 'update', component: EditTeacherComponent },
          {
            path: 'assign-subject',
            component: ResignTeacherComponent
          },
          { path: 'remove-teacher', component: DeleteTeacherComponent }
        ]
      }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {}

