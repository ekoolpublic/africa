import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubregisterStudentsComponent } from './subregister-students.component';

describe('SubregisterStudentsComponent', () => {
  let component: SubregisterStudentsComponent;
  let fixture: ComponentFixture<SubregisterStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubregisterStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubregisterStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
