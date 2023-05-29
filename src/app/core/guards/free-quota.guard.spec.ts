import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { freeQuotaGuard } from './free-quota.guard';

describe('freeQuotaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => freeQuotaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
