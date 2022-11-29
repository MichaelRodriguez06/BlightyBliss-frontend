import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingFileAsignationComponent } from './pending-file-asignation.component';

describe('PendingFileAsignationComponent', () => {
  let component: PendingFileAsignationComponent;
  let fixture: ComponentFixture<PendingFileAsignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingFileAsignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingFileAsignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
