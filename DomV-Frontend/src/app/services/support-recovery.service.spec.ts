import { TestBed } from '@angular/core/testing';

import { SupportRecoveryService } from './support-recovery.service';

describe('SupportRecoveryService', () => {
  let service: SupportRecoveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportRecoveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
