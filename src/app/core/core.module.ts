import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    exports: [AppRoutingModule]
})
export class CoreModule {}
