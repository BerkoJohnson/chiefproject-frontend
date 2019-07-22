import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IStudent, StudentService } from 'src/app/_helpers/services/student.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-students-update',
  templateUrl: './students-update.component.html',
  styleUrls: ['./students-update.component.scss']
})
export class StudentsUpdateComponent implements OnInit {

  uploadForm: FormGroup;
  imgSrc = '';
  image: File;
  student: IStudent;

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentService,
    private route: ActivatedRoute) {
    this.uploadForm = this.fb.group({
      photo: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.studentsService.student$.subscribe(s => this.student = s);
    this.route.paramMap.pipe(
      switchMap(d => {
        return this.studentsService.getStudent(d.get('id'));
      })
    ).subscribe(d => {
      // this.studentService.
      this.student = d;

    });
  }

  upload() {
    if (this.uploadForm.invalid) {
      return this.uploadForm.markAsDirty({onlySelf: true});
    }

    const formData = new FormData();
    formData.append('photo', this.image);

    this.studentsService.uploadImage(formData, this.student._id).subscribe(
      (res) => console.log(res),
      (err) => console.warn(err)
    );
  }

  previewImage(event: Event) {
    const target = event.target as EventTarget;
    // @ts-ignore
    const files = target.files as FileList;

    if (!(files.length > 0)) {
      this.uploadForm.markAsTouched({onlySelf: true});
      return this.uploadForm.get('photo').setErrors({
        noPhotoSelected: true
      }, {
        emitEvent: true
      });
    }

    this.image = files.item(0);
    // this.uploadForm.get('photo').setValue(files.item(0));
    const reader = new FileReader();
    reader.onload = (e) => {
      // @ts-ignore
      this.imgSrc = e.target.result;
      if (this.image.size > (5 * Math.pow(10, 6))) {
        this.uploadForm.markAsTouched({onlySelf: true});
        this.uploadForm.get('photo').setErrors({
          imageSize: true
        }, {
          emitEvent: true
        });
      } else if (this.image.type !== 'image/jpeg') {
        this.uploadForm.markAsTouched({onlySelf: true});
        this.uploadForm.get('photo').setErrors({
          imageType: true
        }, {emitEvent: true});
      }
    };

    reader.readAsDataURL(this.image);
  }


}
