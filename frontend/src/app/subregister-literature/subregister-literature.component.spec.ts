import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubregisterLiteratureComponent } from './subregister-literature.component';

describe('SubregisterLiteratureComponent', () => {
  let component: SubregisterLiteratureComponent;
  let fixture: ComponentFixture<SubregisterLiteratureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubregisterLiteratureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubregisterLiteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
