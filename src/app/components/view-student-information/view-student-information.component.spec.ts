import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentInformationComponent } from './view-student-information.component';

describe('ViewStudentInformationComponent', () => {
  let component: ViewStudentInformationComponent;
  let fixture: ComponentFixture<ViewStudentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStudentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
