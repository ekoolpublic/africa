import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkoolDemoComponent } from './ekool-demo.component';

describe('EkoolDemoComponent', () => {
  let component: EkoolDemoComponent;
  let fixture: ComponentFixture<EkoolDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkoolDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkoolDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
