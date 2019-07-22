import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './time-table/time-table.component';

const timeTableRoutes: Routes = [
  { path: '', component: TimeTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(timeTableRoutes)],
  exports: [RouterModule]
})
export class TimeTableRoutingModule { }
