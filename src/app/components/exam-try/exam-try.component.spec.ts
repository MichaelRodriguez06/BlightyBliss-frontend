import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTryComponent } from './exam-try.component';

describe('ExamTryComponent', () => {
  let component: ExamTryComponent;
  let fixture: ComponentFixture<ExamTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamTryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
