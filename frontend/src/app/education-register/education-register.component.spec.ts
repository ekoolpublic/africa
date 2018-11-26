import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationRegisterComponent } from './education-register.component';

describe('EducationRegisterComponent', () => {
  let component: EducationRegisterComponent;
  let fixture: ComponentFixture<EducationRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
