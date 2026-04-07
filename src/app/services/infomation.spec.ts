import { TestBed } from '@angular/core/testing';

import { Infomation } from './infomation';

describe('Infomation', () => {
  let service: Infomation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Infomation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
