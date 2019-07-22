import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSubjectsComponent } from './list-of-subjects.component';

describe('ListOfSubjectsComponent', () => {
  let component: ListOfSubjectsComponent;
  let fixture: ComponentFixture<ListOfSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
