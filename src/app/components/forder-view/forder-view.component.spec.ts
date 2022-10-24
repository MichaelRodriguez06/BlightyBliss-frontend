import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForderViewComponent } from './forder-view.component';

describe('FileManagementComponent', () => {
  let component: ForderViewComponent;
  let fixture: ComponentFixture<ForderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForderViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
