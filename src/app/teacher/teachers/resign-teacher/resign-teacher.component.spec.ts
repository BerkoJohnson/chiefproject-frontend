import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignTeacherComponent } from './resign-teacher.component';

describe('ResignTeacherComponent', () => {
  let component: ResignTeacherComponent;
  let fixture: ComponentFixture<ResignTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResignTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResignTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
