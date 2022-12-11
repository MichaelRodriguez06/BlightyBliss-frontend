import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStudentsProgramComponent } from './report-students-program.component';

describe('ReportStudentsProgramComponent', () => {
  let component: ReportStudentsProgramComponent;
  let fixture: ComponentFixture<ReportStudentsProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportStudentsProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportStudentsProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
