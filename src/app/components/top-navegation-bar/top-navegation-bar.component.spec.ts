import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavegationBarComponent } from './top-navegation-bar.component';

describe('TopNavegationBarComponent', () => {
  let component: TopNavegationBarComponent;
  let fixture: ComponentFixture<TopNavegationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavegationBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavegationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
