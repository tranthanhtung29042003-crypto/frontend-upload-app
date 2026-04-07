import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLoading } from './login-loading';

describe('LoginLoading', () => {
  let component: LoginLoading;
  let fixture: ComponentFixture<LoginLoading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLoading],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginLoading);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
