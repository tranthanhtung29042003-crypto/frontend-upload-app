import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHeader } from './transaction-header';

describe('TransactionHeader', () => {
  let component: TransactionHeader;
  let fixture: ComponentFixture<TransactionHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
