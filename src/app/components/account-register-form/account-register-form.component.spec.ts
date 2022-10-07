import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegisterFormComponent } from './account-register-form.component';

describe('AccountRegisterFormComponent', () => {
  let component: AccountRegisterFormComponent;
  let fixture: ComponentFixture<AccountRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
