import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { periodsLength } from '../../../_helpers/directives/periods-length';
import {
  ISubject,
  SubjectService,
  IPeriod
} from 'src/app/_helpers/services/subject.service';
import { AuthService } from 'src/app/_helpers/services/auth.service';

@Component({
  selector: 'app-add-period',
  templateUrl: './add-period.component.html',
  styleUrls: ['./add-period.component.scss']
})
export class AddPeriodComponent implements OnInit {
  addPeriodForm: FormGroup;
  periodsDB: IPeriod[];
  subject: ISubject;
  daysInWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  constructor(
    private subjectsService: SubjectService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService
  ) {
    this.addPeriodForm = this.fb.group(
      {
        periods: this.fb.array([])
      },
      { validators: [periodsLength] }
    );
  }

  get periods() {
    return this.addPeriodForm.get('periods') as FormArray;
  }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      switchMap(d => {
        return this.subjectsService.getSubject(d.get('id'));
      })
    )
    .subscribe(s => (this.subject = s));

    this.route.paramMap
      .pipe(
        switchMap(d => {
          return this.subjectsService.getPeriods(d.get('id'));
        })
      )
      .subscribe(s => (this.periodsDB = s));
  }

  submitPeriod() {
    if (this.addPeriodForm.invalid) {
      return;
    }
    this.subjectsService
      .addPeriod(this.subject._id, this.addPeriodForm.value)
      .subscribe(p => {
        if (p) {
          this.addPeriodForm.reset();
          this.router.navigate(['/subjects', this.subject._id], {
            relativeTo: this.route
          });
        }
      });
  }

  createForm(): FormGroup {
    return this.fb.group({
      day: ['', Validators.required],
      time: ['', Validators.required],
      override: false
    });
  }

  addPeriod() {
    this.periods.push(this.createForm());
  }

  removePeriod(i: number) {
    this.periods.removeAt(i);
  }


  deletePeriod(period) {
    console.log(period);
  }
}
