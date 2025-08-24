import { TestBed } from '@angular/core/testing';

import { SingleProductResolver } from './single-product.resolver';

describe('SingleProductResolver', () => {
  let resolver: SingleProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SingleProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
