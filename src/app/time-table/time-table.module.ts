import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTableComponent } from './time-table/time-table.component';
import { TimeTableRoutingModule } from './time-table-routing.module';

@NgModule({
  declarations: [
    TimeTableComponent
  ],
  imports: [
    CommonModule,
    TimeTableRoutingModule
  ]
})
export class TimeTableModule { }
