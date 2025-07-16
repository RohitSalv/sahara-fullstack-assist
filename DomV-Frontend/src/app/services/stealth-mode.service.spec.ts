import { TestBed } from '@angular/core/testing';

import { StealthModeService } from './stealth-mode.service';

describe('StealthModeService', () => {
  let service: StealthModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StealthModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
