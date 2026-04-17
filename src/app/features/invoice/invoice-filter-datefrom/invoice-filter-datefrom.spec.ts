import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFilterDatefrom } from './invoice-filter-datefrom';

describe('InvoiceFilterDatefrom', () => {
  let component: InvoiceFilterDatefrom;
  let fixture: ComponentFixture<InvoiceFilterDatefrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceFilterDatefrom],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceFilterDatefrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
