import { TestBed } from '@angular/core/testing';

import { PolauthService } from './polauth.service';

describe('PolauthService', () => {
  let service: PolauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
