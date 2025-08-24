import { TestBed } from '@angular/core/testing';

import { NewProdResolver } from './new-prod.resolver';

describe('NewProdResolver', () => {
  let resolver: NewProdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NewProdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
