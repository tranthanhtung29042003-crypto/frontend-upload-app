import { TestBed } from '@angular/core/testing';

import { Listinvoice } from './listinvoice';

describe('Listinvoice', () => {
  let service: Listinvoice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Listinvoice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
