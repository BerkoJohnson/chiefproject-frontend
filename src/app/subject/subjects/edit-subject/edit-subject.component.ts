import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/_helpers/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.scss']
})
export class EditSubjectComponent implements OnInit {

  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    console.log('Updating...');
  }

}
