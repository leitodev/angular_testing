import { TestBed } from '@angular/core/testing';

import { AsyncDepService } from './async-dep.service';

describe('AsyncDepService', () => {
  let service: AsyncDepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncDepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
