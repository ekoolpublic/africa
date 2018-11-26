import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubregisterCurriculaComponent } from './subregister-curricula.component';

describe('SubregisterCurriculaComponent', () => {
  let component: SubregisterCurriculaComponent;
  let fixture: ComponentFixture<SubregisterCurriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubregisterCurriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubregisterCurriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
