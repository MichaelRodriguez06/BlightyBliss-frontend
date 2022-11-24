import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountListComponent } from './view-account-list.component';

describe('ViewAccountListComponent', () => {
  let component: ViewAccountListComponent;
  let fixture: ComponentFixture<ViewAccountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccountListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
