import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStudentsComponent } from './report-students.component';

describe('ReportStudentsComponent', () => {
  let component: ReportStudentsComponent;
  let fixture: ComponentFixture<ReportStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
