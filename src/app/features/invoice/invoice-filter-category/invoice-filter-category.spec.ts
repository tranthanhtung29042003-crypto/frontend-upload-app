import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFilterCategory } from './invoice-filter-category';

describe('InvoiceFilterCategory', () => {
  let component: InvoiceFilterCategory;
  let fixture: ComponentFixture<InvoiceFilterCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceFilterCategory],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceFilterCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
