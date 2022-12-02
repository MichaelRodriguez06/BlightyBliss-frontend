import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGeneralCertificatesComponent } from './view-general-certificates.component';

describe('ViewGeneralCertificatesComponent', () => {
  let component: ViewGeneralCertificatesComponent;
  let fixture: ComponentFixture<ViewGeneralCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGeneralCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGeneralCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
