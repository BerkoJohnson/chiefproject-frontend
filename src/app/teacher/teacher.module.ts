import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers/teachers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherRoutingModule } from './teachers-routing.module';
import { ListOfTeachersComponent } from './teachers/list-of-teachers/list-of-teachers.component';
import { ViewTeacherComponent } from './teachers/view-teacher/view-teacher.component';
import { NewTeacherComponent } from './teachers/new-teacher/new-teacher.component';
import { ResignTeacherComponent } from './teachers/resign-teacher/resign-teacher.component';
import { TeachersHomeComponent } from './teachers/teachers-home/teachers-home.component';
import { EditTeacherComponent } from './teachers/edit-teacher/edit-teacher.component';
import { DeleteTeacherComponent } from './teachers/delete-teacher/delete-teacher.component';

@NgModule({
  declarations: [
    TeachersComponent,
    ListOfTeachersComponent,
    ViewTeacherComponent,
    NewTeacherComponent,
    ResignTeacherComponent,
    TeachersHomeComponent,
    EditTeacherComponent,
    DeleteTeacherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
