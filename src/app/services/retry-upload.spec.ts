import { TestBed } from '@angular/core/testing';

import { RetryUpload } from './retry-upload';

describe('RetryUpload', () => {
  let service: RetryUpload;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetryUpload);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
