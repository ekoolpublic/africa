import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSchoolListComponent } from './register-school-list.component';

describe('RegisterSchoolListComponent', () => {
  let component: RegisterSchoolListComponent;
  let fixture: ComponentFixture<RegisterSchoolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSchoolListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSchoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
