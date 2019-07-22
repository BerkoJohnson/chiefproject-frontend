import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRegisterSubjectsComponent } from './students-register-subjects.component';

describe('StudentsRegisterSubjectsComponent', () => {
  let component: StudentsRegisterSubjectsComponent;
  let fixture: ComponentFixture<StudentsRegisterSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsRegisterSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRegisterSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
