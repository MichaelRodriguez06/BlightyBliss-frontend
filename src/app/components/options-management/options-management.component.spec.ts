import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsManagementComponent } from './options-management.component';

describe('FileManagementComponent', () => {
  let component: OptionsManagementComponent;
  let fixture: ComponentFixture<OptionsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
