import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSidebarComponent } from './students-sidebar.component';

describe('StudentsSidebarComponent', () => {
  let component: StudentsSidebarComponent;
  let fixture: ComponentFixture<StudentsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
