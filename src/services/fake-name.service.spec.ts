import { TestBed } from '@angular/core/testing';

import { FakeNameService } from './fake-name.service';

describe('FakeNameService', () => {
  let service: FakeNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
