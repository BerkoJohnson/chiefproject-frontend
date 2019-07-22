import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersChangePasswordComponent } from './users-change-password/users-change-password.component';
import { UsersChangeRoleComponent } from './users-change-role/users-change-role.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', component: UsersHomeComponent },
      { path: 'new', component: UsersNewComponent },
      {path: ':id', children: [
          {path: '', component: UsersViewComponent},
          {path: 'update', component: UsersEditComponent},
          {path: 'change-password', component: UsersChangePasswordComponent},
          {path: 'change-role', component: UsersChangeRoleComponent}
      ]}
    ]
  }
];

@NgModule({
  declarations: [
    UsersComponent,
    ListOfUsersComponent,
    UsersHomeComponent,
    UsersNewComponent,
    UsersViewComponent,
    UsersEditComponent,
    UsersChangePasswordComponent,
    UsersChangeRoleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserModule {}
