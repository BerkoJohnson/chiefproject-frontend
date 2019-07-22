import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './core/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/guards/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
  {
    path: 'students',
    canActivate: [AuthGuard],
    loadChildren: () => import('./student/student.module').then(mod => mod.StudentModule)
  },
  {
    path: 'teachers',
    canActivate: [AuthGuard],
    loadChildren: () => import('./teacher/teacher.module').then(mod => mod.TeacherModule)
  },
  {
    path: 'subjects',
    canActivate: [AuthGuard],
    loadChildren: () => import('./subject/subject.module').then(mod => mod.SubjectModule)
  },
  {
    path: 'time-table',
    canActivate: [AuthGuard],
    loadChildren: () => import('./time-table/time-table.module').then(mod => mod.TimeTableModule)
  },
  {
    path: 'accounts',
    canActivate: [AuthGuard],
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
