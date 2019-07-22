import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { ISubjectPayload, SubjectService } from 'src/app/_helpers/services/subject.service';

@Component({
  selector: 'app-list-of-subjects',
  templateUrl: './list-of-subjects.component.html',
  styleUrls: ['./list-of-subjects.component.scss']
})
export class ListOfSubjectsComponent implements OnInit {
  subjects$: Observable<ISubjectPayload>;
  searchForm: FormGroup;
  selectedID = '';

  constructor(
    private subjectService: SubjectService,
    private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      title: ''
    });
  }

  ngOnInit() {
    this.subjects$ = this.subjectService.subjects$;

    this.searchForm.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      switchMap(v => {
        return this.subjectService.getByPage(1, 15, v.title);
      })
    ).subscribe();

  }

  setSubject(doc) {
    this.subjectService.getSubject(doc._id).subscribe();
  }

  // gotoPage(page: number) {
  //   this.subjectService.getByPage(page, 15, this.search).subscribe();
  // }
  gotoPage(page: number) {
    const searchInput = this.searchForm.get('title').value;
    this.subjectService.getByPage(page, 15, this.title || '').subscribe();
  }
  get f() {
    return this.searchForm.controls;
  }

  get title() {
    return this.f.title.value;
  }


  onHover(id) {
    this.selectedID = id;
  }

}
