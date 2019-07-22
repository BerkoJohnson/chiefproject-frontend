import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRemoveComponent } from './students-remove.component';

describe('StudentsRemoveComponent', () => {
  let component: StudentsRemoveComponent;
  let fixture: ComponentFixture<StudentsRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
