import { TestBed } from '@angular/core/testing';

import { LiteService } from './lite.service';

describe('LiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiteService = TestBed.get(LiteService);
    expect(service).toBeTruthy();
  });
});
