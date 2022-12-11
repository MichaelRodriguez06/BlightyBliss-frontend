import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGeneralStadisticsComponent } from './report-general-stadistics.component';

describe('ReportGeneralStadisticsComponent', () => {
  let component: ReportGeneralStadisticsComponent;
  let fixture: ComponentFixture<ReportGeneralStadisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGeneralStadisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGeneralStadisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
