import { Component, OnInit } from '@angular/core';
import {
  ITeacher,
  TeacherService
} from 'src/app/_helpers/services/teacher.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-resign-teacher',
  templateUrl: './resign-teacher.component.html',
  styleUrls: ['./resign-teacher.component.scss']
})
export class ResignTeacherComponent implements OnInit {
  teacher: ITeacher;

  constructor(
    private readonly teacherService: TeacherService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(v => {
          return this.teacherService.getTeacher(v.get('id'));
        })
      )
      .subscribe(t => (this.teacher = t));
  }
}
