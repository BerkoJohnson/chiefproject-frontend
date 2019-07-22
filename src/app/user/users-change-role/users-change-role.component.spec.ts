import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersChangeRoleComponent } from './users-change-role.component';

describe('UsersChangeRoleComponent', () => {
  let component: UsersChangeRoleComponent;
  let fixture: ComponentFixture<UsersChangeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersChangeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersChangeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
