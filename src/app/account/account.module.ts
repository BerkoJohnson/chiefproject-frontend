import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountsComponent } from './accounts/accounts.component';
import { AccountRoutingModule } from './account-routing.module';
import { PayComponent } from './accounts/pay/pay.component';

@NgModule({
  declarations: [AccountsComponent, PayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
