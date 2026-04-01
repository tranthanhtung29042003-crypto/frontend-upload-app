import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReview } from './transaction-review';

describe('TransactionReview', () => {
  let component: TransactionReview;
  let fixture: ComponentFixture<TransactionReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionReview],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionReview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
