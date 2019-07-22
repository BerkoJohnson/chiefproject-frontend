import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentsComponent } from './students/students.component';
import { StudentsHomeComponent } from './students/students-home/students-home.component';
import { StudentsNewComponent } from './students/students-new/students-new.component';
import { StudentsViewComponent } from './students/students-view/students-view.component';
import { StudentsUpdateComponent } from './students/students-update/students-update.component';
import { StudentsRegisterSubjectsComponent } from './students/students-register-subjects/students-register-subjects.component';
import { StudentsRemoveComponent } from './students/students-remove/students-remove.component';
import { ListOfStudentsComponent } from './students/list-of-students/list-of-students.component';
import { StudentsSidebarComponent } from './students/students-sidebar/students-sidebar.component';
import { StudentRoutingModule } from './student-routing.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsHomeComponent,
    StudentsNewComponent,
    StudentsViewComponent,
    StudentsUpdateComponent,
    StudentsRegisterSubjectsComponent,
    StudentsRemoveComponent,
    ListOfStudentsComponent,
    StudentsSidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule
  ],
})
export class StudentModule {}
