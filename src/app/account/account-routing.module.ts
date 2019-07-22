import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './accounts/accounts.component';
import { PayComponent } from './accounts/pay/pay.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      {path: 'pay/:studentID', component: PayComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
