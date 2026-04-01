import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePagination } from './invoice-pagination';

describe('InvoicePagination', () => {
  let component: InvoicePagination;
  let fixture: ComponentFixture<InvoicePagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicePagination],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoicePagination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
