import { TestBed } from '@angular/core/testing';

import { DriveStore } from './drive-store';

describe('DriveStore', () => {
  let service: DriveStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriveStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
