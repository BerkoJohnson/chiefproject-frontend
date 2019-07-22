import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersChangePasswordComponent } from './users-change-password.component';

describe('UsersChangePasswordComponent', () => {
  let component: UsersChangePasswordComponent;
  let fixture: ComponentFixture<UsersChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
