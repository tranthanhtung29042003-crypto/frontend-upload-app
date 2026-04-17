import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFilterDateto } from './invoice-filter-dateto';

describe('InvoiceFilterDateto', () => {
  let component: InvoiceFilterDateto;
  let fixture: ComponentFixture<InvoiceFilterDateto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceFilterDateto],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceFilterDateto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
