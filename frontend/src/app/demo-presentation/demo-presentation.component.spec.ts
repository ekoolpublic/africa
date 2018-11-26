import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPresentationComponent } from './demo-presentation.component';

describe('DemoPresentationComponent', () => {
  let component: DemoPresentationComponent;
  let fixture: ComponentFixture<DemoPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
