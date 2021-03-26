import { TestBed } from '@angular/core/testing';

import { SalePostService } from './sale-post.service';

describe('SalePostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalePostService = TestBed.get(SalePostService);
    expect(service).toBeTruthy();
  });
});
