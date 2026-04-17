import { TestBed } from '@angular/core/testing';

import { UpdateInvoice } from './update-invoice';

describe('UpdateInvoice', () => {
  let service: UpdateInvoice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateInvoice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
