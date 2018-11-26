import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubregisterTeachersComponent } from './subregister-teachers.component';

describe('SubregisterTeachersComponent', () => {
  let component: SubregisterTeachersComponent;
  let fixture: ComponentFixture<SubregisterTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubregisterTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubregisterTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
