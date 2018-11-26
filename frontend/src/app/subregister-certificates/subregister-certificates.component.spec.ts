import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubregisterCertificatesComponent } from './subregister-certificates.component';

describe('SubregisterCertificatesComponent', () => {
  let component: SubregisterCertificatesComponent;
  let fixture: ComponentFixture<SubregisterCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubregisterCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubregisterCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
