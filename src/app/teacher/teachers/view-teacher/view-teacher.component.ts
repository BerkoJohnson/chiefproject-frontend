import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TeacherService, ITeacher } from 'src/app/_helpers/services/teacher.service';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.scss']
})
export class ViewTeacherComponent implements OnInit {
  teacher: ITeacher;
  constructor(
    private teacherService: TeacherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(p => {
          return this.teacherService.getTeacher(p.get('id'));
        })
      )
      .subscribe(d => this.teacher = d);
  }
}
