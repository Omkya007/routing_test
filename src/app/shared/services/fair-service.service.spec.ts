import { TestBed } from '@angular/core/testing';

import { FairServiceService } from './fair-service.service';

describe('FairServiceService', () => {
  let service: FairServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FairServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
