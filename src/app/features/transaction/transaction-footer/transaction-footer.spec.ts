import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFooter } from './transaction-footer';

describe('TransactionFooter', () => {
  let component: TransactionFooter;
  let fixture: ComponentFixture<TransactionFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
