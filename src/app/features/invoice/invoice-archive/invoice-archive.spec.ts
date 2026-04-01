import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceArchive } from './invoice-archive';

describe('InvoiceArchive', () => {
  let component: InvoiceArchive;
  let fixture: ComponentFixture<InvoiceArchive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceArchive],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceArchive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
