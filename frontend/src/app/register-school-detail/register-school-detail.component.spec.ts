import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSchoolDetailComponent } from './register-school-detail.component';

describe('RegisterSchoolDetailComponent', () => {
  let component: RegisterSchoolDetailComponent;
  let fixture: ComponentFixture<RegisterSchoolDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSchoolDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSchoolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
